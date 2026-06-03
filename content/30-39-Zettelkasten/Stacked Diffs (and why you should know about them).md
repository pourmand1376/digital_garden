---
title: Stacked Diffs (and why you should know about them)
source: https://newsletter.pragmaticengineer.com/p/stacked-diffs?utm_source=publication-search
author:
  - "[[Gergely Orosz]]"
published: 2023-10-17
created: 2026-03-29 15:53:05
description: "Meta and Google have been using stacking for closer to a decade: a coding workflow that is very efficient for small PRs. So what is stacking, and how come it’s not more widespread in the industry?"
tags:
  - clippings
  - 
shamsi: 1405-01-09 15:53:05
calendar: "[[2026-03-29]]"
aliases:
publish: true
---
- [Stacked Diffs](https://twitter.com/benschac/status/1522214962357096448)
- [reddit.com/r/programming/comments/xz0l2p/stacked\_diffs\_versus\_pull\_requests/](https://www.reddit.com/r/programming/comments/xz0l2p/stacked_diffs_versus_pull_requests/)
- [Gregory Szorc's Digital Home \| Problems with Pull Requests and How to Fix Them](https://gregoryszorc.com/blog/2020/01/07/problems-with-pull-requests-and-how-to-fix-them/)
- [Stacked Diffs Versus Pull Requests \| Jackson Gabbard's Blog](https://jg.gg/2018/09/29/stacked-diffs-versus-pull-requests/)
- [Stacked Diffs: Keeping Phabricator Diffs Small \| by Kurtis Nusbaum \| Medium](https://kurtisnusbaum.medium.com/stacked-diffs-keeping-phabricator-diffs-small-d9964f4dcfa6)

Gemini:
## Best Practices for Stacked PRs
When working with stacks, it's helpful to visualize the "chain" to avoid confusion for your reviewers.
- **Targeting:** Ensure your dependent MR (MR B) is targeting the branch of the previous MR (MR A) rather than `main`. This makes the "Changes" tab only show the new work for that specific stack.
- **Sequential Merging:** Once MR A is merged into `main`, you must update MR B to target `main` as well. GitLab often handles the "re-targeting" automatically if the source branch of MR A is deleted upon merge.
- **Draft Status:** It is common practice to keep dependent MRs in **Draft** mode until the previous ones are approved, even if you’ve set up the dependency rule.

[Rebase in Pull Requests](Rebase%20in%20Pull%20Requests.md)
