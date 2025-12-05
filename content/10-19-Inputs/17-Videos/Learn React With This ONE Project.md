---
created: 2025-11-13T12:19:39+03:30
reviewed:
url: https://www.youtube.com/watch?v=G6D9cBaLViA
title: Learn React With This ONE Project
channel: Tech With Tim
related:
  - "[[Videos]]"
published: 2024-11-24
thumbnailUrl: https://i.ytimg.com/vi/G6D9cBaLViA/maxresdefault.jpg
duration: "5970"
watched:
publish: true
aliases:
  - Learn React With This ONE Project
---


![Learn React With This ONE Project](https://www.youtube.com/watch?v=G6D9cBaLViA)

00:00:00 | Overview
00:00:57 | Free Resource
00:02:04 | Demo
00:03:03 | React Introduction
00:06:02 | Setup & Installation
00:08:08 | React Template Walkthrough
00:13:31 | JSX
00:16:22 | Components
00:19:56 | Movie Card Component
00:29:15 | Conditional Rendering
00:32:43 | Home Page & .map()
00:40:00 | State
00:48:11 | Page Routing
00:56:41 | CSS Styling
01:01:00 | Calling APIS
01:07:25 | useEffect
01:16:54 | Searching for Movies
01:20:14 | Contexts

### Introduction
First It explains about react architecture. The main important thing is:

> [!important]
> Nearly, Everything you see is a component in react. 

### Setup Guide
- Download NodeJs
- Install NPM (Node Package Manager)
- Create New Project

```bash
npm create vite@latest
## then select template for react
cd folder_name
npm install
```

To run the server, you can use:
```bash
npm run dev
```

- `Index.html` is the first file that gets executed and react will control the DOM and inject the code into the root id. 
- `main.jsx` will be looking for root div. 

### To Remember

> [!note]
> JSX = React JavaScript = JavaScript + HTML

> [!tip]
> Component is a Javascript function that returns JSX code. 

Each component returns a single item. If you want to return multiple items, you either have to wrap it inside another div or you can you `Fragment`.

```jsx
<>
<p> first paragraph</p>
<p> second </p>
</>
```

Fragment is a sort of placeholder that wraps components together. 

You can and should also use components in other components.

Note that you should use classname instead of class in the components. 

### Conditional Rendering
We can use if but as best practice we will use conditional rendering. Like:

```jsx
return condition ? <div> return this if condition is true</div> : <div> return if it is false</div>
```

### Other Elements
- You can have pages that have multiple components inside them. (Component vs Page)
- You can use Map to render a dynamic list of elements and iterate over them (like for).
- If you use map, remember to add `key` for each item so that react can handle them better.

### State, Router, Context
How do we maintain State? When the state is updated, we want the component to be rendered again. 

```jsx
import {usestate} from "react"
```

Then you can use `usestate` function to maintain state. 

Each time state changes, the entire component would render again. but state variable will remain the same. 

How can we have url routing like `/favorites`. We can use React Router. 

```bash
npm install react-router-dom
```

Then you can add `<BrowserRouter>` tag to whole app and then use `<Router>` with this format to specify address:
```jsx
<Router path="/favorite" element={<Favorite/>}/>
```

We can and should use css. Every jsx file should have a corresponding css file. 

If you want to fetch from API, you have to use `useeffect` function. This way you can add time to functions to specify when they should run. Otherwise, they would run on every component refresh. 

You can set them to run only one time or when a dependency changes. 

We also have local storage if you want to maintain state as a `global variable`. 

That's it. :)) This was my first react movie and I just understood what react is. 

[software](Index%20Softwares.md)



