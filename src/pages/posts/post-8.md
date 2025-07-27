---
layout: '../../layouts/BlogPostLayout2.astro'
title: "LLM and I"
pubDate: 2025/07/26
description: "My thoughts on LLM's and Web Development"
author: "Jomkit Jujaroen"
image: 
    src: Null
    alt: 'If there was an image here, it would have to do with LLMs and AI tools'
tags: ["LLM", "AI Tools", "Developer Tooling"]
---

<p class="pb-5">These days, all you hear about in tech news, global news, and even from friends and family is “AI this,” “LLM that.” Even after a year of professional programming, I still occasionally worry about being replaced by some AI-powered VS Code fork. But no matter how intelligent LLMs become, they’re still just pattern recognition systems. And while they’re improving rapidly every quarter, they aren’t yet a complete substitute for a junior software engineer—especially not if you want to grow future senior engineers.</p>

<p class="pb-5">As someone who uses the Cursor IDE and GitHub Copilot at work, I’ve quickly learned what AI excels at and where it falls short. It really comes down to how common the problem you’re trying to solve is; how often it's appeared on Stack Overflow or in other public resources. By design, LLMs are great at spotting patterns in historical data and surfacing the most effective past solutions. This makes them fantastic for bootstrapping new projects, and I believe they work best in codebases that were started with AI tools and continue to integrate them.</p>

<p class="pb-5">For long-running projects that adopt AI tools later, I’ve found that coding assistants struggle more with understanding the context of the codebase and solving less-documented issues. The first problem, context awareness, varies by tool. Cursor generally does a good job identifying which files to review and consider, no matter which model you're using. GitHub Copilot, on the other hand, often requires more hand-holding; I’ve had to explicitly tell it which files to reference, and even then, it hasn’t always gotten it right.</p>

<p class="pb-5">The second issue, handling less common problems, is more universal. For example, I’ve used LLMs to help set up multiple databases with Flask and SQLAlchemy. While I got things working in the end, both Copilot and Cursor made several suggestions that had no grounding in the official documentation. In other cases, I’ve seen LLMs hallucinate API endpoints or invent documentation out of thin air. I even watched ChatGPT hallucinate endpoints for the OpenAI API itself, which I found ironically amusing.</p>

<p class="pb-5">This isn’t meant to be a full review of AI coding tools, but I will say this: I prefer Cursor for tasks that involve touching multiple files or require an understanding of the entire codebase. GitHub Copilot is great for simpler tasks or early-stage brainstorming. The price point of Copilot ($10/month vs. Cursor’s $20/month) is definitely more appealing, and it allows more tokens or requests per month.</p>

<p class="pb-5">In the end, though, none of these tools replace critical thinking. It’s like the invention of the calculator: it didn’t make calculus or differential equations obsolete. Similarly, today’s AI tools can accomplish amazing things and eliminate a lot of the boilerplate work software engineers typically deal with. But without applying our own reasoning and judgment, we won’t be able to use these tools to their full potential.</p>