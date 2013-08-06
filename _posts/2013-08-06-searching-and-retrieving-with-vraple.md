---
layout: post
title: Searching and Retrieving with Vraple
---

{% include JB/setup %}

I've just finished what I would consider the simplest version of Vraple that I could publish. Explaining what Vraple does is best explained by examples, you should check it out at [Vraple.com](http://vraple.com). One example would be searching for "!amazon lotr". Vraple will then send you to DuckDuckGo, which sends you to an Amazon search for "lotr". If you click the back-button, you will go back to Vraple, which will send you to the Google search for "!amazon lotr".

General purpose search engines hasn't really changed much the last decade. You enter some keywords and are presented with the most relevant results. We've got some improvements, like Google Instant, but nothing really drastic.

The first version of Vraple were too drastic. It would always forward you to the first result on Google, and then let you navigate to the search results by clicking the back button if Google got it wrong. Perhaps unsurprisingly, it didn't work out, Google's "I'm feeling lucky" isn't the default for a reason.

I think it is a valuable insight that you use Google for two different things - searching and retrieving information. What do I mean by retrieveing? Navigating your browser to a website you know exists through a search engine. When searching, you want to view all the results, read the titles and snippets of relevant text. When retrieving, you already know which link you want to click on before the results come back to you. 

So Vraples purpose is to figure out if you're in search or retrieval mode, and act accordingly.

Right now it only manages to send you to DuckDuckGo and WolframAlpha, but in the future it could send you to Google Maps if you enter an address, or a look-up service if you enter a phonenumber.

You can test Vraple for yourself at [Vraple.com](http://vraple.com). You can [view the source on GitHub](https://github.com/saltvedt/vraple).