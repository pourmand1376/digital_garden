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
              <span class="alias-item">{alias}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

AliasList.css = "./styles/aliaslist.scss"

export default (() => AliasList) satisfies QuartzComponentConstructor
