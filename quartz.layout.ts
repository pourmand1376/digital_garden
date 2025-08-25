import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Flex({
      components: [
        { Component: Component.PageTitle() },
        { Component: Component.Flex({
          components: [
            { Component: Component.Search() },
            { Component: Component.Darkmode() },
          ],
        }), 
        },
      ],
    }),  
    
  ],
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
      "github": "https://github.com/pourmand1376",
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
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
    // Component.FloatingButtons(),
    // Component.RecentNotes(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
  ],
  left: [
  ],
  right: [
    Component.Graph(),
    Component.Backlinks(),
    // Component.FloatingButtons(),
  ],
}