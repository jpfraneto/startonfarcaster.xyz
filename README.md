# Start On Farcaster

A Farcaster Mini App designed to help new users build their identity on Farcaster and evolve from newcomers to active community members.

[Launch in Warpcast](https://warpcast.com/~/frames/launch?domain=startonfarcaster.xyz)

## 📱 What is this?

Start On Farcaster is a Mini App that guides users through a step-by-step process to create a good looking Farcaster account, post engaging content, and connect with the community. It's based on a 7-day challenge created by [Kate Kornish](https://warpcast.com/katekornish) to help users get rid of the spam label and build a meaningful presence on Farcaster.

The app walks users through the following daily challenges:

1. [Getting started with Farcaster](https://paragraph.com/@katekornish/get-rid-of-spam-label-7-days-challenge)
2. [Establishing identity and purpose](https://paragraph.com/@katekornish/step-2-identity-and-purpose)
3. [Creating a compelling profile](https://paragraph.com/@katekornish/7-day-challenge-get-rid-of-the-spam-label-on-farcaster-step-3)
4. [Building connections](https://paragraph.com/@katekornish/7-day-challenge-get-rid-of-the-spam-label-on-farcaster-step-4)
5. [Engaging with content](https://paragraph.com/@katekornish/7-day-challenge-get-rid-of-the-spam-label-on-farcaster-step-5)
6. [Creating valuable content](https://paragraph.com/@katekornish/7-day-challenge-get-rid-of-the-spam-label-on-farcaster-step-6)
7. [Becoming an active community member](https://paragraph.com/@katekornish/7-day-challenge-get-rid-of-the-spam-label-on-farcaster-step-7)

Each day links to a detailed guide published on Paragraph that explains the concepts and provides actionable steps.

## 🚀 Technical Overview

This is a Vite application built with React, TypeScript, and TailwindCSS. It's designed as a Farcaster Mini App, which means it can be launched directly within Farcaster clients like Warpcast.

### What are Farcaster Mini Apps?

Mini Apps are web applications that can be discovered and used within Farcaster clients. They can access native Farcaster features like authentication, notifications, and wallet interactions through the Farcaster Frame SDK.

## 🛠️ Development

### Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- A Farcaster account (to test the app)

### Local Development

1. Clone the repository:

`git clone https://github.com/jpfraneto/startonfarcaster.xyz`

2. Install Dependencies:

`bun install`

3. Run dev environment

`bun run dev`

4. Build your project

`bun run build`

5. Deploy to [orbiter](https://orbiter.host) (best static site host ever)

`orbiter deploy`
