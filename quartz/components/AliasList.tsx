import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const AliasList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const aliases = fileData.frontmatter?.aliases
  if (aliases && aliases.length > 0) {
    return (
      <div class={classNames(displayClass, "aliases")}>
        <h4>Aliases</h4>
        <ul class="aliases-list">
          {aliases.map((alias: string) => (
            <li>
              <span class="alias-item">
                {alias}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

AliasList.css = `
.aliases {
  margin: 1rem 0;
}

.aliases h4 {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: var(--gray);
  font-weight: 600;
}

.aliases-list {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 0;
  flex-wrap: wrap;
}

.aliases-list > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

.alias-item {
  border-radius: 6px;
  background-color: var(--lightgray);
  color: var(--dark);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
  font-size: 0.8rem;
  border: 1px solid var(--border);
}
`

export default (() => AliasList) satisfies QuartzComponentConstructor
