import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "نوشته‌های امیر",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "aprd-notes",
    },
    locale: "fa-IR",
    baseUrl: "apourmand.ir",
    ignorePatterns: ["private", "templates", ".obsidian", "Templates/"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Vazirmatn",
        body: "Vazirmatn",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f0f2", // Backg
          lightgray: "#d8d8da", // Code Backg
          gray: "#868889", // Unread nodes and subtitles
          darkgray: "#202225", // Text
          dark: "#202225", // Code text
          secondary: "#027b1f", // Links, title, and current node
          tertiary: "#185ecd", // Visited nodes
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#202225", // Backg
          lightgray: "#383b3d", // Code Backg
          gray: "#686D82", // Unread nodes and subtitles
          darkgray: "#f0f0f2", // Text
          dark: "#f0f0f2", // Code text
          secondary: "#a6e3a1", // Links, title, and current node
          tertiary: "#89dceb", // Visited nodes
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
