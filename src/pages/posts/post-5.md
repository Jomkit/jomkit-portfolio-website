---
layout: '../../layouts/BlogPostLayout.astro'
title: "From Software to Hardware"
pubDate: 2025/07/13
description: "I talk about going full circle, from my background to software and now back to hardware"
author: "Jomkit Jujaroen"
image: 
    src: '../images/blog-images/first-blog-post'
    alt: 'Image of a dawn under a starry sky'
tags: []
---
<h2 class="pt-5">Some Background Info</h2>

Once upon a time as a young Electrical/Mechanical Engineering Technology student I took an arduino programming class. My second exposure to programming, after an intro to computer science for engineers class where I programmed a tic tac toe game and battleship, this time around I got intimately familiar with the Arduino Integrated Development Environment and programming turn signals and small servomotors. I think the culmination of this class was simulating a four way stoplight with buttons and LED's on a breadboard. I guess this sparked a lifelong passion for logic gates and coding, because here I am years later, building web apps and tinkering with raspberry pi's.\
\
Ever since I began my software engineering journey, I've always wondered how computers work at a low level. At first I was intimidated by the complexity of things the closer you get to the hardware level. It felt like looking back into the evolution of man from fish to neanderthal (forgive my ignorance any anthropologists reading this, I'm a software engineer not a rocket scientist) except instead of a four legged fish with lungs it was some sort of typewriter with lightbulbs and angry beeping. But finally I decided to get over the trepidations; the world of embedded systems and embedded software was filled with too many treasures to waste another time fretting over. So I resolved to google each and every term I didn't understand. 

<h2 class="pt-5">The Actual Setup</h2>

All this to say, I wanted to get back into programming microprocessors and programming microcontrollers. It feels like the perfect extension of what I already love about software development: the ability to prototype anything and pretty quickly get some form of feedback. With web development, of course you can spin up a website in a matter of minutes (forgive the oversimplification). With microcontrollers, it turns out to be quite similar as long as you have the right parts. 
In this blog post I'll be talking about the process of setting up the environment and tools for working on microcontrollers, specifically an Arduino Uno R3 in this case.

<h2 class="pt-5">Overview</h2>

So most of you who are familiar with Arduinos and perhaps have taken a class like I have, will know about the Arduino IDE. What you might not know is that there are other IDE's that are just as great for working on microcontrollers. The one I'd like to walk you through today is called PlatformIO. 
Are there other instructions out there for setting up PlatformIO? Yes. Do they cover set up on Windows, Mac, and Linux? Absolutely. But, is there a one-stop shop guide to setting up the PlatformIO extension in VSCode on Windows Subsystem for Linux 2? The answer may surprise you: no. If you are in this very niche position that I found myself in, then this post is for you. This process of setting up the PlatformIO extension on WSL2 was painful enough for me that I felt it was my duty to share what I've learned and the resources I've gathered so perhaps someone else finding themselves in my situation won't have to go through the pains I did. 
Now, you may be wondering why I would subject myself to such pains instead of using the Arduino IDE. Well, the main reason is the Arduino IDE is designed for beginners of all ages and skill levels. This means that a bit of the complexity has been abstracted away to facilitate a smoother user experience. This is great for beginners, and truthfully I don't see any reason why an experienced hobbyist should refrain from it either, or even professionals though not being one myself I can't speak for all professionals. That being said, from my research, PlatformIO stands out for it's versatility, wide array of frameworks, toolchains, and libraries, and its integration with VSCode. With Arduino IDE you're kind of limited to Arduino boards, but with PlatformIO, you can work with STM32's, ESP32's, and tons more compatible boards. In the end, I've only just started programming with PlatformIO, so only time will tell if it's all it's cracked up to be. 