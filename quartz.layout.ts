import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],  
  afterBody: [
    Component.Flex({
      components: [
        // { 
        //   Component: Component.Backlinks(),
        //   align: "start",
        // },
        { 
          Component: Component.TagList(),
          align: "start",
        },
      ],
      direction: "column",
    }),  

    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'amir-pourmand/quartz',
        repoId: 'R_kgDOPjileA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOPjileM4Cui6P',
        lang: 'fa',
        mapping: 'pathname',
        inputPosition: 'top',
      }
    }),
  ],
  footer: 
  Component.Footer({
    links: {
      "Github": "https://github.com/pourmand1376",
      "Linkedin": "https://www.linkedin.com/in/amir-pourmand",
      "Telegram": "https://t.me/pourmand_amir",
      "Persian Blog": "https://aprd.ir",
      "English Blog": "https://amirpourmand.ir"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta({ showReadingTime: false, showComma: false }),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.Breadcrumbs({
      rootName: "خانه",
    }),
    Component.MobileOnly(Component.TableOfContents()),
    Component.ConditionalRender({
      component: Component.Backlinks(),
      condition: (page) => page.fileData.filePath?.toLowerCase().includes("index") == true,
    })
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.RecentNotes({ showTags: false })),
    // Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false, showComma: false }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
  ],
}