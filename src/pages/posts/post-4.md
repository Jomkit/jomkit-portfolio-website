---
layout: '../../layouts/BlogPostLayout.astro'
title: "Duplication: To Abstract, or Not?"
pubDate: 2025/07/11
description: "I'm not sure what this is yet"
author: "Jomkit Jujaroen"
image: 
    src: '../images/blog-images/first-blog-post'
    alt: 'Image of a dawn under a starry sky'
tags: []
---
<h3>Foreword</h3>

As I consider myself pretty young in my programming journey, and definitely so when it comes to blogging, forgive me if I forget to explain certain terms and concepts and assume you the kind reader already know it all.

<h3 class="pt-5">Intro</h3>

Early on in my Software Engineering bootcamp I was introduced to software engineering principles as part of a well-rounded, fast-paced curriculum. The concept of duplication, and how to avoid it, was impressed on me very often. Don't Repeat Yourself (DRY), as they say. Duplication is when you've written the same blocks of code over and over again; or in many cases, copied and pasted the same code repeatedly. This results in tech debt, another important concept that we could go into detail about but I'll save that for another day, for now you probably that it's basically entropy in software development. Anyway, I felt like a DRY hammer, and every problem was a duplication nail to be hammered in. I've come to realize that concepts and patterns without natural exposure to the problems they're meant to solve are difficult to fully understand.\
\
So it wasn't until my first capstone project that it started clicking why I needed to abstract away logic. I'll try not to bore you with the details but basically I created a flask-powered restaurant app that would let restaurant owners create a menu, handle orders, takeout, and deliveries. 

<h3 class="pt-5>Learning through Experience</h3>

While building the app, I kept a vigilant eye out for optimizations and abstractions that could pave the way to features later down the road. In hindsight, I spent way too much time trying to figure out how to get code to bend to my will without considering if it really needed to. Was five hours spent refactoring a section of code that could be used in many places, but realistically only used once, really worth it?\
\
Despite reflecting on my time management during that project and how it was skewed to certain refactors, I still thought the mark of a skilled programmer was to abstract away possible sources of duplication as soon as they started to appear. I'd spend a couple hours on a React component that worked fine, try to stuff it into a separate file while keeping it reactive. I would always end up with a spaghetti monster of code, hiding in the JSX tag closet, its complexity spilling out in the properties that would have to be passed. Even now when I build a new website using Astro.js, with its clever island architecture and page layout modularity, I have to remind myself not everything needs to be abstracted away into a layout.\
\
To illustrate, on my current portfolio website I use a basic astro layout file for each of the main pages. This was great for making sure each page has a navigation bar and footer. One issue though is that I thought I'd save myself some time and headaches later on by letting the layout component take a "title" attribute, and using that for both the title of the page (in the browser tab) as well as the text for the h1 element of each page. This is great if those things are consistent, but sometimes I want to be more specific with my header.\
\
I could have just nested another header in the main contents passed to the layout component, but then I'd end up with two headers, which I find messy. So my solution was to add a second attribute to the layout component I called "altTitle", and refactor the component so that if "altTitle" was not an empty string, the page would use "title" for the title of the page and "altTitle" for the main header. For example, on the blog page. You'll notice that the title of the page (again, see the browser tab) is "Blog", but the main header is "Welcome to My Blog!" Visually this worked out, but if it looks like tech debt and sounds like tech debt, that's because it is tech debt.

<h3 class="pt-5">Conclusion</h3>

It was through these repeated lessons that I would come to realize DRY was more of a suggestion, rather than a hard rule. This concept is best explained by Kent C. Dodds in his blog post [AHA Programming](https://kentcdodds.com/blog/aha-programming), which is a great read if you haven't done it. Basically, AHA stands for Avoid Hasty Abstractions, which I find an incredibly useful reality check for beginner and junior programmers. Having done both too much abstraction and too little abstraction, I'm familiar with the perils of each. Kent Dodds says it best: "...write the abstraction when it _feels_ right and don't be afraid to duplicate code until you get there." I think it's better to save time duplicating code that's only used in a couple places, instead of spending two hours upfront that you might find you wouldn't have even spent later on trying to refactor.\
\
One final note, a third acronym often used when talking about duplication is WET, or Write Everything Twice. I haven't strictly tried web development this way, but I see the merit nonetheless. In the end I think that AHA strikes the best balance between WET and DRY. It's not like you MUST abstract all the time, but sometimes you do see an opportunity to abstract code that will in fact be used a lot throughout the lifecycle of your web application. In this case, I think it's best to spend some time just pondering whether the refactor is worth it or not. Our goal should always to find 20% of the solutions that have 80% impact.