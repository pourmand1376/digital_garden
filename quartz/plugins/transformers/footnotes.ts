import { QuartzTransformerPlugin } from "../types"
import { Root, Element } from "hast"
import { visit } from "unist-util-visit"
import { i18n } from "../../i18n"

export const LocalizedFootnotes: QuartzTransformerPlugin = () => {
  return {
    name: "LocalizedFootnotes",
    htmlPlugins(ctx) {
      return [
        () => {
          return (tree: Root) => {
            const cfg = ctx.cfg.configuration
            const locale = i18n(cfg.locale)

            visit(tree, "element", (node: Element) => {
              // Find footnotes section
              if (node.tagName === "section" && node.properties?.["dataFootnotes"] !== undefined) {
                // Find the h2 heading inside
                const heading = node.children.find(
                  (child) => child.type === "element" && child.tagName === "h2",
                ) as Element

                if (heading) {
                  // Remove sr-only class if present
                  if (Array.isArray(heading.properties?.className)) {
                    heading.properties.className = heading.properties.className.filter(
                      (cls) => cls !== "sr-only",
                    )
                  }

                  // Replace the first text node with localized text
                  const textNode = heading.children.find((child) => child.type === "text")
                  if (textNode) {
                    textNode.value = locale.components.footnotes.title
                  }
                }
              }
            })
          }
        },
      ]
    },
  }
}
