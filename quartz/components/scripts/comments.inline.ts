const changeTheme = (e: CustomEventMap["themechange"]) => {
  const theme = e.detail.theme
  const iframe = document.querySelector("iframe.giscus-frame") as HTMLIFrameElement
  if (!iframe) {
    return
  }

  if (!iframe.contentWindow) {
    return
  }

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: getThemeUrl(getThemeName(theme)),
        },
      },
    },
    "https://giscus.app",
  )
}

const getThemeName = (theme: string) => {
  if (theme !== "dark" && theme !== "light") {
    return theme
  }
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return theme
  }
  const darkGiscus = giscusContainer.dataset.darkTheme ?? "dark"
  const lightGiscus = giscusContainer.dataset.lightTheme ?? "light"
  return theme === "dark" ? darkGiscus : lightGiscus
}

const getThemeUrl = (theme: string) => {
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return `https://giscus.app/themes/${theme}.css`
  }
  return `${giscusContainer.dataset.themeUrl ?? "https://giscus.app/themes"}/${theme}.css`
}

type GiscusElement = Omit<HTMLElement, "dataset"> & {
  dataset: DOMStringMap & {
    repo: `${string}/${string}`
    repoId: string
    category: string
    categoryId: string
    themeUrl: string
    lightTheme: string
    darkTheme: string
    mapping: "url" | "title" | "og:title" | "specific" | "number" | "pathname"
    strict: string
    reactionsEnabled: string
    inputPosition: "top" | "bottom"
    lang: string
  }
}

document.addEventListener("nav", () => {
  const giscusContainer = document.querySelector(".giscus") as GiscusElement
  if (!giscusContainer) {
    return
  }

  // Add 5 second delay before loading giscus
  setTimeout(() => {
    // Check if container still exists after delay (user might have navigated away)
    const currentContainer = document.querySelector(".giscus") as GiscusElement
    if (!currentContainer) {
      return
    }

    const giscusScript = document.createElement("script")
    giscusScript.src = "https://giscus.app/client.js"
    giscusScript.async = true
    giscusScript.crossOrigin = "anonymous"
    giscusScript.setAttribute("data-loading", "lazy")
    giscusScript.setAttribute("data-emit-metadata", "0")
    giscusScript.setAttribute("data-repo", currentContainer.dataset.repo)
    giscusScript.setAttribute("data-repo-id", currentContainer.dataset.repoId)
    giscusScript.setAttribute("data-category", currentContainer.dataset.category)
    giscusScript.setAttribute("data-category-id", currentContainer.dataset.categoryId)
    giscusScript.setAttribute("data-mapping", currentContainer.dataset.mapping)
    giscusScript.setAttribute("data-strict", currentContainer.dataset.strict)
    giscusScript.setAttribute("data-reactions-enabled", currentContainer.dataset.reactionsEnabled)
    giscusScript.setAttribute("data-input-position", currentContainer.dataset.inputPosition)
    giscusScript.setAttribute("data-lang", currentContainer.dataset.lang)
    const theme = document.documentElement.getAttribute("saved-theme")
    if (theme) {
      giscusScript.setAttribute("data-theme", getThemeUrl(getThemeName(theme)))
    }

    currentContainer.appendChild(giscusScript)

    document.addEventListener("themechange", changeTheme)
    window.addCleanup(() => document.removeEventListener("themechange", changeTheme))
  }, 5000) // 5 second delay
})
