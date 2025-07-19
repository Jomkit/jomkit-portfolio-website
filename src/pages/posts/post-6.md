---
layout: '../../layouts/BlogPostLayout2.astro'
title: "PlatformIO WSL 2 Setup Guide"
pubDate: 2025/07/18
description: "How to set up PlatformIO for VS Code on Windows Subsystem for Linux 2"
author: "Jomkit Jujaroen"
image: 
    src: '/src/images/blog-images/platformio.png'
    alt: 'platformio icon'
tags: ["embedded","microcontrollers", "setup"]
---
<i class="text-md">Image is platformio logo. This post is not sponsored</i>

<h2 class="pt-5">Intro</h2>

If you're here from yesterdays post, then thank you for being so invested! If you're here because like me you do a lot of development on WSL 2, and want to set up PlatformIO for some embedded software development, then you're in luck. 

<h3 class="pt-5">Prerequisites</h3>

Here is my system setup, and roughly what you should expect to have installed and set up before we set up PlatformIO.
- Operating System: Windows 11
	- PowerShell (should be preinstalled if you have Windows 11)
- Windows Subsystem for Linux 2 (WSL 2) 
	- WSL ver. 2.5.9.0
- VSCode (installed in WSL 2)

Most of this guide will follow along with the [quickstart guide](https://docs.platformio.org/en/latest/integration/ide/vscode.html#ide-vscode) PlatformIO offers, but in a moment you'll see why that's not enough.

<h2 class="pt-5">How to Set Up PlatformIO</h2>

Outlined below are the three main things I had to go through to finally be able upload code written in PlatformIO to my Arduino Uno R3. 

<h3 class="pt-5">Installing PlatformIO</h3>

1. Open VS Code and go to the extension tab. Type in "PlatformIO" and the first result should be "PlatformIO IDE." Click install, and wait for it to complete. Once it finishes, the PlatformIO logo should appear at the bottom of your sidebar (for me it was under the beaker icon for testing).
2. Clicking on PlatformIO should open up a quick access side bar and initialize PlatformIO Core. 
	1. If for some reason PlatformIO reinstalls, just go ahead and reload the page when prompted and you should get the proper quick access side bar view. 
3. Ideally, from here you could either open up a platformio project or create a new project. Go ahead and create a new project, name it whatever you want (I named mine "test"), in the "Board" field choose "Arduino Uno", which should populate the framework field automatically. Lastly you can leave the Location box checked for the default file location to save to, it won't make a difference for what's coming next. 

<h3 class="pt-5">PlatformIO Unable to Locate File</h3>

1. At this point I ran into my first roadblock to PlatformIO development: PlatformIO couldn't find the project it just created!
	
<div class="pl-12 mt-2">
    Sidenote: to the best of my understanding it seems this has something to do with how PlatformIO handles file structure of the operating system it's on. Annoyingly, this is because Windows uses backslashes "\" while Linux and Mac use forward slashes "/" to separate directories. This presents a somewhat unique issue for those of us who do their development in WSL2.
</div>
<div class="pl-12 my-2">
    Interestingly enough PlatformIO will correctly set up a "PlatformIO" directory in the root directory of your WSL 2 Debian environment, and even set up the Project directory properly.
    Then however for some reason PlatformIO doesn't recognize that it is technically running in a Linux environment, and so uses the Window style backslash for project directories in its own Projects folder. If you named your new project "test" like I did, this results in a directory "~/PlatformIO/Projects/Projects\test" which, most annoyingly, the platformIO project will not recognize.
</div> 

2. Unfortunately it seems this issue hasn't been patched yet, but luckily I found a [github issues](https://github.com/platformio/platformio-home/issues/2316#issuecomment-1151332626) thread that yielded a few simple monkey patches, the easiest of which is to go to the very root directory of your Debian environment, navigate to `home/$USER/.platformio/packages/contrib-piohome/`, and open the minified main file that should look like `[random-uuid].min.js`. "ctrl+f" to search for the exact string `"\\":"/"` and replace that with `"/":"/"`. With that, PlatformIO should easily locate new projects you create through the extension GUI.
3. Finally, repeat step 3 above.
4. PlatformIO will set up the project and open up the main.cpp file for you. Once here, go ahead and copy the code from the quickstart guide. Build your code by either clicking the build button at the bottom (should look like a checkmark) or clicking "ctrl+alt+b." This should work without a hitch.
5. If you haven't already, plug in your arduino board.
6. Here is the step that sent me on a google side quest. Upload your built code to the arduino board by either clicking the "upload" button (a right pointing arrow) or clicking "ctrl+alt+u." At this point, you're gonna get a really annoying error message about not being able to find the "upload_port."
	Sidenote: At this point, I thought the issue was that I didn't specify the `upload_port` since that was what the terminal in VS Code was yelling at me about. So I entered the project's platformio.ini file to try and add the `upload_port` to the environment variables list. I set the port to `upload_port = COM[5]` according to some stack overflow threads, but that didn't solve my problem. 
	It wasn't until I dug deeper that I discovered the real issue was that the USB ports of my laptop, although known to the Windows 11 operating system, were not known to my Debian environment in WSL 2, where VS Code and PlatformIO live. 
	This solution proved quite annoying.

<h3 class="pt-5">How to Expose USB Ports to the Debian Environment</h3>

1. The way to fix PlatformIO being unable to "see" a USB port is to attach them to WSL via the windows PowerShell. What you'll need to do for this is to install USBIPD-WIN in PowerShell.  You could honestly just follow the instructions [here](https://learn.microsoft.com/en-us/windows/wsl/connect-usb) but I'll share how I did it.
	**NOTE**: as far as I can tell, you have to connect a device via a USB port first in order to "see" it in PowerShell, and then keep it plugged in. It also seems that you'll need to **attach** the USB device each time you want to use it, which is annoying but at least you won't have to do the *entire* process.
	1. Start by opening Windows PowerShell. You'll need to run some commands as admin in a bit, so you could open as an admin now if you'd like.
	2. Next, make sure your WSL linux kernel version is greater than 5.10.60.1. You can check by running `wsl --version`, which should give you information like WSL version as well as Linux kernel version.
	3. If your kernel version is too old, you can easily update by running `wsl --update`.
	4. After updating the kernel version, it's time to install USBIPD-WIN. I have `winget` installed for package management in PowerShell, and I prefer to install packages in the command line when I can, so I just ran the following command:
		`winget install --interactive --exact dorssel.usbipd-win`
		Alternatively you can go to the [latest release page](https://github.com/dorssel/usbipd-win/releases) on GitHub, download the appropriate .msi file for your CPU architecture (arm64, or x64), and run the installer.
		In either case you'll have installed a service called `usbipd`, the command line tool `usbipd` which we'll be using, and a firewall rule called `usbipd` which allows local subnets to connect to the service.
2. Finally, it's time to attach the USB device. Take a breath, we're in the final stretch now. In PowerShell, list the devices with the command `usbipd list`. The console will output all the current USB ports connected to Windows in a table. You'll notice a "STATE" column on the far right, and each port is listed as "not shared." We want to share at least one so that it can be accessed in WSL 2. Take note of the `BUSID` column to the far-left, because we're gonna need it in the next step.
3. This next step will require admin privileges, so if you haven't already started PowerShell as an admin, exit out of the terminal. In the windows search bar, type in PowerShell, and then right click on the PowerShell icon to bring up the context menu and click "run as admin." 
4. Next we need to bind the port to be able to share it. Run the command `usbipd bind --bus-id <busid>` replacing `<busid>` with the bus ID. In my case, I used 1-1 but yours may differ.
5. Finally, to attach the USB device to WSL 2, we run the command `usbipd attach --wsl --busid <busid>` again replacing `<busid>` with the desired bus ID.
6. Open up your WSL command line, mine is in Bash. Confirm that WSL can access the USB port now by running the command `lsusb`, you should see the USB device we just attached.
7. Finally, we are done. If you go back to PlatformIO now and upload your built code again, it should successfully run the blink program, or whatever other program you wish to run now; I chose to update mine to blink the Morse code pattern SOS. This seemed pretty appropriate. 
8. When you're done programming your arduino for the day, you can simply unplug it physically or run `usbipd detach --busid <busid>` in PowerShell. Either way, the device will be effectively unplugged. As far as I know, you'll have to run through step 5 above again no matter what to reattach the device. 

<h2 class="pt-5">Conclusion</h2>

There you have it, wasn't that annoying. It's simply a consequence of programming on WSL 2. But, in my experience it's way more common to develop with Bash vs. PowerShell if you use the command line. The pros and cons of using the command line GUI vs. individual program GUIs will have to be saved for a different blog post. For now, enjoy your newfound freedom with PlatformIO!
