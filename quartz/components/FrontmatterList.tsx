import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { JSX } from "preact"

function isEmptyValue(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === "string" && value.trim() === "") return true
  if (Array.isArray(value) && value.length === 0) return true
  if (typeof value === "object" && !Array.isArray(value)) return Object.keys(value).length === 0
  return false
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

function formatUrlLabel(value: string): string {
  try {
    const url = new URL(value)
    return `${url.host}${url.pathname === "/" ? "" : url.pathname}`
  } catch {
    return value
  }
}

function formatValue(value: unknown): string | JSX.Element {
  if (typeof value === "string" && isHttpUrl(value)) {
    return (
      <a href={value} class="external" target="_blank" rel="noopener noreferrer">
        {formatUrlLabel(value)}
      </a>
    )
  }

  if (Array.isArray(value) || (value !== null && typeof value === "object")) {
    try {
      return JSON.stringify(value)
    } catch {
      return String(value)
    }
  }

  return String(value)
}

const FrontmatterList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const frontmatter = fileData.frontmatter
  if (!frontmatter) return null

  const entries = Object.entries(frontmatter).filter(([, value]) => !isEmptyValue(value))
  if (entries.length === 0) return null

  return (
    <div class={classNames(displayClass, "frontmatter-list")}>
      <details>
        <summary>Frontmatter</summary>
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, value]) => (
              <tr>
                <td>{key}</td>
                <td>{formatValue(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  )
}

FrontmatterList.css = `
.frontmatter-list {
  margin: 1rem 0;
}

.frontmatter-list details {
  border: 1px solid color-mix(in srgb, var(--border) 85%, var(--secondary) 15%);
  border-radius: 12px;
  padding: 0.65rem 0.8rem;
  background: color-mix(in srgb, var(--light) 94%, var(--lightgray) 6%);
  box-shadow: 0 1px 2px color-mix(in srgb, var(--dark) 8%, transparent);
}

.frontmatter-list summary {
  cursor: pointer;
  color: var(--dark);
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  list-style: none;
}

.frontmatter-list details[open] summary {
  margin-bottom: 0.65rem;
}

.frontmatter-list summary::-webkit-details-marker {
  display: none;
}

.frontmatter-list summary::after {
  content: "▾";
  float: right;
  color: var(--gray);
  font-size: 0.9rem;
  transform: translateY(1px);
}

.frontmatter-list details:not([open]) summary::after {
  content: "▸";
}

.frontmatter-list table {
  width: 100%;
  border-collapse: collapse;
  direction: ltr;
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  background: var(--light);
}

.frontmatter-list th,
.frontmatter-list td {
  text-align: left;
  vertical-align: top;
  border-top: 1px solid color-mix(in srgb, var(--border) 88%, transparent);
  padding: 0.5rem 0.6rem;
  line-height: 1.35;
}

.frontmatter-list th {
  border-top: none;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--gray);
  background: color-mix(in srgb, var(--lightgray) 65%, var(--light) 35%);
}

.frontmatter-list td:first-child {
  width: 32%;
  font-weight: 600;
  color: var(--dark);
  background: color-mix(in srgb, var(--lightgray) 22%, var(--light) 78%);
}

.frontmatter-list td:last-child {
  overflow-wrap: anywhere;
  color: color-mix(in srgb, var(--dark) 90%, var(--gray) 10%);
}

.frontmatter-list tbody tr:nth-child(even) td:last-child {
  background: color-mix(in srgb, var(--lightgray) 12%, var(--light) 88%);
}

.frontmatter-list tbody tr:hover td {
  background: color-mix(in srgb, var(--highlight) 30%, var(--light) 70%);
}

.frontmatter-list td a {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

@media (max-width: 800px) {
  .frontmatter-list th,
  .frontmatter-list td {
    padding: 0.45rem 0.45rem;
    font-size: 0.9rem;
  }

  .frontmatter-list td:first-child {
    width: 38%;
  }
}
`

export default (() => FrontmatterList) satisfies QuartzComponentConstructor
