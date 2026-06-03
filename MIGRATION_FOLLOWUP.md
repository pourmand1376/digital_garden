# Migration follow-up: `published` → `published_v5`

Tracks what was migrated from the old `published` (Quartz v4) branch to
`published_v5` (Quartz v5), and what's still outstanding.

Content files were intentionally **not** migrated (they sync from Obsidian via
`just fetch`). This is about tooling + customizations only.

---

## ✅ Done

### Committed (commit `7f37cad`)
- **`Makefile`** — deprecation stub redirecting to `just`.
- **`Justfile`** — `install` / `serve` / `sync` / `fetch` recipes.
  - `serve`/`sync` depend on `install` (`npx quartz plugin install`) so v5's
    generated `.quartz/` exists before build. The old v4 `quartz.config.ts`
    sed-patching was dropped (no such file in v5).
- **`scripts/`** — Obsidian→Quartz sync (`obsidian-quartz-sync.py` + uv env).
  - Includes a **fix**: a `NoDatesSafeLoader` so PyYAML stops parsing `shamsi:`
    (Jalali) dates as Gregorian and crashing with "day is out of range for
    month". Date-shaped frontmatter values now load as plain strings.

### Uncommitted (in working tree)
- **`quartz.config.default.yaml`**
  - `locale: fa-IR` → drives RTL via `<html dir="rtl">`.
  - Fonts → `Vazirmatn` (header + body), `IBM Plex Mono` (code).
  - `pageTitle: نوشته‌های امیر`.
  - `analytics: goatcounter` / `websiteId: aprd-notes`.
  - Custom green/blue color palette (light + dark).
  - Footer links (Github/pourmand1376, Linkedin, Telegram, Persian Blog,
    English Blog).
- **`quartz/styles/custom.scss`** — ported custom CSS:
  - RTL: forces math + code blocks LTR.
  - **Per-paragraph direction**: `unicode-bidi: plaintext` on
    `p / li / h1–h6 / ul / ol` — English-leading blocks render LTR,
    Persian-leading blocks RTL (native replacement for the old v4 `isFarsi()`
    transformer).
  - Moon background, `.head-card`, `.tall-img` / `.img-pair`, `.dead-link`
    styling, hidden folder arrows, etc.
- **`quartz/styles/_external-links.scss`** — external-link favicon/SVG icons
  (GitHub, X, YouTube, Aparat, Telegram, …). `@use`d from `custom.scss`.
- **`.cursor/rules/should-customize.mdc`** — guardrail: only edit
  `custom.scss` / `quartz.config.*` to stay update-safe.

---

## ⏳ Outstanding / needs a decision

### 1. `moon-light.png` (verify)
`custom.scss` references `url("/moon-light.png")`, but the file is **not in git**
on either branch. It likely syncs from the Obsidian vault into `content/`.
**Action:** after `just fetch` + build, confirm the moon image loads on the
index page. If it 404s, drop `moon-light.png` into `quartz/static/`
(served at site root `/`).

### 2. Dead-link detection (port — recommended)
- **Status:** CSS already ported (`.dead-link` in `custom.scss`). The
  *detection logic* is not.
- **What it does (v4):** walks the rendered HTML; any internal `<a href>` that
  doesn't match a real page slug becomes `<span class="dead-link">`.
- **Why not a merge:** lived in v4's `quartz/plugins/emitters/contentPage.tsx`,
  which doesn't exist in v5 (now the external `content-page` plugin).
- **Recommended path:** a small **local rehype transformer plugin** (~30 lines),
  added to the plugin list. No fork needed; update-safe.
- **Note:** v4's `.dead-link` style had 4 extra props the current port omits —
  `padding: 0 0.1rem`, `border-radius: 5px`, `line-height: 1.4rem`,
  `cursor: default`. Add back if desired.
- **Upstream contribution target:**
  https://github.com/quartz-community/content-page
  (ideally gated behind an opt-in option like `markDeadLinks: true`).

### 3. Search includes aliases (port — awkward)
- **Status:** not ported. v5 search does **not** index aliases by default
  (confirmed: `ContentDetails` has no `aliases` field; search indexes only
  title/content/tags).
- **What it does (v4):** adds `aliases` to the search index and registers it as
  a FlexSearch field so aliases are searchable.
- **Why not a merge:** spans two v5 external plugins —
  - `content-index` (emit `aliases` into the index JSON)
  - `search` (register `aliases` field in the client `search.inline.ts`)
- **Options:**
  - **(a) Fork both plugins** — exact behavior, but maintenance cost and fights
    upstream updates (against the `.cursor` rule).
  - **(b) No-fork trick** — append each note's aliases into its searchable
    `content` at build time (a local transformer). Less precise ranking, zero
    forks.
  - **(c) Skip.**
- **Upstream contribution targets (coordinated PRs):**
  - https://github.com/quartz-community/content-index (add + emit `aliases`)
  - https://github.com/quartz-community/search (index + query `aliases`)
  - Open an issue first; content-index PR should land before search consumes it.

### 4. Page structure / layout (header, footer, sidebars, components)
v4 layout lived in `quartz.layout.ts`; v5 layout = the top-level `layout:` block
+ each plugin's `layout:` entry in the yaml. **Most apparent "differences" are
v5's intentional new defaults (reader-mode, backlinks-on-right, note-properties)
— do NOT revert those.** Only genuine customizations are listed here.

**Portable to YAML (verified against installed plugin source):**
- **Breadcrumbs `rootName: خانه`** — v5 breadcrumbs plugin supports `rootName`
  (default "Home"). Add to the breadcrumbs plugin's `options`.
- **Graph `localGraph` options** (v4: depth 2, fontSize 1.2, scale 2) — v5 graph
  plugin's `localGraph` accepts `depth` / `scale` / `fontSize` (defaults 1 /
  1.1 / 0.6). Add to the graph plugin's `options.localGraph`.
- **Footer links** — ✅ already ported.

**NOT a mechanical port — needs a decision or a local plugin:**
- **Explorer `filterFn`** (v4: show only depth ≤ 1, hide `tags`) — v4 used a JS
  closure; v5 yaml can't hold functions. v5 explorer exposes *declarative*
  options (`excludeTags`, `excludePathPrefixes`) but **no depth limit**. So
  "hide tags" maps; "depth ≤ 1" does not without a local/forked explorer.
- **`afterBody` Flex[Backlinks, TagList, AliasList]** — doesn't translate:
  - Backlinks → already on `right` in v5 (default).
  - TagList → exists but `enabled: false`; flip to enable if wanted.
  - **AliasList → no equivalent plugin in v5** (`alias-redirects` is redirects,
    not alias *display*). Drop it, or build a local plugin.
- **Split TOC** (v4: mobile TOC at top of beforeBody, desktop TOC on right) —
  v5 shows one TOC on `right` for all viewports. Replicating mobile-at-top needs
  display-flag work; defer unless wanted.

---

## Reference

- Most v4 → v5 differences are **core code moving to external plugins** under
  `github:quartz-community/*` (installed into `.quartz/`, gitignored,
  regenerated by `npx quartz plugin install`). These are **not** migration
  candidates — only your *customizations* are.
- Already-merged-into-`published` feature branches were all **ports, not
  merges**, because they patched files that no longer exist in v5:
  `fix_rtl`, `mixed_persian_english_fix`, `fix_dead_links`,
  `search_include_aliases`.
- Core Quartz upstream: https://github.com/jackyzha0/quartz (the `upstream`
  remote). Community plugins org: https://github.com/quartz-community

---

## Not yet committed

The config + CSS + `.cursor` changes above are uncommitted. To finish:
- decide branch (`published_v5` directly vs a new branch),
- optionally restore the 4 dead-link CSS props,
- then commit.
