---
layout: '../../layouts/BlogPostLayout.astro'
title: "From Software to Hardware"
pubDate: 2025/07/17
description: "I talk about going full circle, from my background to software and now back to hardware"
author: "Jomkit Jujaroen"
image: 
    src: '../images/blog-images/first-blog-post'
    alt: 'Image of a dawn under a starry sky'
tags: []
---
<h2>Foreword</h2>

I meant for this to be a setup guide for PlatformIO originally but ended up writing more about my motivation for wanting to use PlatformIO over Arduino IDE. So if you're interested in hearing about my experience and motivation for one over the other, read on! If you just want to read the set-up guide, stay tuned as I'll be posting that tomorrow.

<h2 class="pt-5">Intro</h2>

Software engineering reminds me a lot of mechanical engineering. Back in university, I saw how mechanical engineers often crossed into many other fields--and now, as a full-stack developer, I do the same with devops, databases, cloud, and UI/UX. Each project pushes me to learn something new and pull in knowledge from all over.\
\
Lately, my curiosity has pulled me into embedded software engineering. I’ve always wondered how computers really work under the hood, but the closer you get to the hardware, the more complex (and intimidating) things can seem. At first, it felt like staring down a confusing, blinking, beeping machine from another era. But instead of shying away, I decided to jump in--Googling every unfamiliar term along the way.\
\
Now, I’m excited to get hands-on with microcontrollers and microprocessors again. For me, embedded systems are a natural extension of what I love most about software: rapid prototyping and real, tangible feedback. Sure, spinning up a website is fast, but with microcontrollers, you can build and test something physical just as quickly—with the right parts.\
\
To get back into programming microcontrollers, I decided to start with an Arduino because of how versatile and beginner friendly they are. However, I didn't to completely start off at the beginner level with the ARduino IDE. So, I did some research on what people are using today, and I found a great IDE for beginners with a bit more experience programming: PlatformIO.

<h2 class="pt-5">Arduino IDE Vs. PlatformIO for Microcontrollers</h2>

So most of you who are familiar with Arduinos and perhaps have taken a class like I have, will know about the Arduino IDE. What you might not know is that there are other IDE's that are just as great for working on microcontrollers. I originally thought I'd use the Arduino IDE again, but I decided to do a little bit of research and I found out that a lot of tinkerers both hobbyists and professionals use a VS Code extension called PlatformIO.

<h3 class="pt-5">Why wouldn't you just use the Arduino IDE?</h3>

There are many good reasons to use the Arduino IDE. It's beginner friendly, abstracts some of the complex processes, and already has all the libraries you might need to program an Arduino microcontroller. However, if you want to eventually branch out and try different microcontrollers and electronics, you'll find yourself a little limited. That's where PlatformIO comes in.\
\
The PlatformIO extension for VS Code is great because not only does it work for Arduino, it works for many other boards such as ESP32, STM32, and so on. Since it runs on VS Code, you now have access to intellisense and other auto-suggestion, as well as git integration, and even unit testing. See <a class="underline" href="https://dronebotworkshop.com/platformio/" target="_blank" rel="noopener noreferrer">Getting Started with PlatformIO</a> for more information, or checkout the official website <a class="underline" href="https://platformio.org/" target="_blank" rel="noopener noreferrer">platformio.org</a>.\
\
Are there other instructions out there for setting up PlatformIO? Yes. Do they cover set up on Windows, Mac, and Linux? Absolutely. But, is there a one-stop shop guide to setting up the PlatformIO extension in VSCode on Windows Subsystem for Linux 2? The answer may surprise you: no. If you are in this very niche position that I found myself in, then I have a post coming up for you. This process of setting up the PlatformIO extension on WSL2 was painful enough for me that I felt it was my duty to share what I've learned and the resources I've gathered so perhaps someone else finding themselves in my situation won't have to go through the pains I did.\
\
Now, you may be wondering why I would subject myself to such pains instead of using the Arduino IDE. Well, the main reason is the Arduino IDE is designed for beginners of all ages and skill levels. This means that a bit of the complexity has been abstracted away to facilitate a smoother user experience. This is great for beginners, and truthfully I don't see any reason why an experienced hobbyist should refrain from it either, or even professionals, though not being one myself I can't speak for all professionals. That being said, from my research, PlatformIO stands out for it's versatility, wide array of frameworks, toolchains, and libraries, and its integration with VSCode. With Arduino IDE you're kind of limited to Arduino boards, but with PlatformIO, you can work with STM32's, ESP32's, and tons more compatible boards. In the end, I've only just started programming with PlatformIO, so only time will tell if it's all it's cracked up to be. Stay tuned for the set-up guide I'll be posting soon!

<section>
<h2 class="pt-5">Resources</h3>

<a class="underline" href="https://dronebotworkshop.com/platformio/" target="_blank" rel="noopener noreferrer">Getting Started with PlatformIO</a>
<br />
<a class="underline" href="https://platformio.org/" target="_blank" rel="noopener noreferrer">platformio.org</a>
</section>