---
layout: '../../layouts/BlogPostLayout2.astro'
title: "CSS Methodologies"
pubDate: 2025/07/19
description: "Musings on CSS Methodologies"
author: "Jomkit Jujaroen"
image: 
    src: Null
    alt: 'Some CSS Banner'
tags: ["embedded","microcontrollers", "setup"]
---
<h2 class="pt-5">Intro</h2>

As far as CSS goes, I've built a fair amount of static websites in my day, and used layout tools like flexbox and grid, but for the most part I always just stuck to vanilla CSS. When I was learning web development through Springboard's programming bootcamp, I was taught how to use the Bootstrap CSS framework to quickly style a page. This was great, but I never liked the "sanitized" look. You can quickly tell too when a website uses Bootstrap. In terms of prototyping this is fine, and admittedly there are a lot of great websites that customize their Bootstrap to the point where it's unrecognizable. But at that point, why not just go back to vanilla CSS? So for my second capstone project at Springboard, I decided to pick up Tailwind, and I was delighted at how easily one could create a unique UI without going into the weeds. After that, Tailwind was my defacto choice for styling websites.

<h2 class="pt-5">Tailwind</h2>

Indeed, I love using Tailwind, and I used to think that was the best way to go. It's super easy to apply, pretty easy to remember the classes, and the styling lives right there with the element. Thanks to PostCSS, the verbose nature of Tailwind classes gets cleaned up, with unused CSS classes being purged. On the other hand, the development can get messy since Tailwind by its nature relies on adding new classes for each bit of styling you want to add to an element. This can result in bloated element tags even when the content of the elements itself is quite small. \
\
Another issue I've run into is wanting to apply the same styling to multiple elements, which in tailwind can be done by either copying and pasting the stylings to each desired element (major DRY violation haha) or, my solution has been to create a CSS file for a specific HTML or JSX file, writing a custom CSS class, and in the selector adding a tailwind `@apply` directive to "inject" tailwind into the selector. This feels super hacky though, and counterintuitive to the Tailwind philosophy. At this point I go to wondering, "have I been using Tailwind as a crutch? Are there better ways to scale styling to large web apps?" One solution I've found is CSS Modules.

<h2 class="pt-5">CSS Modules</h2>

Although there are many practices and processes you could cover that extend basic vanilla CSS beyond simple global selectors (and in fact, I went down a rabbit hole reading about the BEM model of writing CSS selectors), the one that caught my eye and that I'd like to discuss first is CSS Modules. CSS Modules have been around since about 2015, and they facilitate CSS styling in a local scope, rather than globally as you might have been taught with vanilla CSS. Although, CSS Modules are technically a process where a bundler, such as <a class="underline" href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a> or <a class="underline" href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">Parcel</a>, as part of the build step, compiles the CSS files and links classes defined in CSS files to their references in the JS or JSX file.\
\
All this I learned while researching CSS Modules, the resources of which I've listed below. It actually turns out I've been working with CSS modules all this time, in a client's project I'm working on where the codebase was initially bootstrapped by another contracted team. As someone who came from a background in Tailwind, my initial reaction was frustration that I had to dig through CSS files to find the code blocks relevant to a particular element's styling. But as I've looked into CSS Modules and read up on how they're used with modern CSS, I've begun to realize two things. First, that this solves my initial problem of needing to repeat stylings for certain elements. And second, I realized that I've been overreliant on Tailwind. 

<h2 class="pt-5">Conclusion</h2>

I'm trying to broaden my CSS knowledge and improve the way I've been styling my web pages. To that end, I'd like to hear how other professionals in the frontend space have been going about CSS styling, what practices or methods are popular now, and what has stood the test of time. While researching CSS Modules, I read some opinions that it is old and out of style, yet other opinions that said it stands the test of time compared to frameworks that are just passing fads.\
\
So if you've read this far, thanks! I appreciate the time you've put into reading my thoughts on CSS, and I'd love to hear yours. I don't have a comment section here yet, but I'd like to implement one one day. For now, you can reach me on LinkedIn (where you probably came from) or BlueSky <a class="underline" href="https://bsky.app/profile/kaizendon.bsky.social" target="_blank" rel="noopener noreferrer">@kaizendon.bsky.social</a>!

<section>
<h2 class="pt-5">Resources</h2>

<a class="underline" href="https://css-tricks.com/css-modules-part-1-need/" target="_blank" rel="noopener noreferrer">What are CSS Modules and why do we need them?</a>

<a class="underline" href="https://github.com/css-modules/css-modules" target="_blank" rel="noopener noreferrer">Official CSS Module Repository</a>
</section>
