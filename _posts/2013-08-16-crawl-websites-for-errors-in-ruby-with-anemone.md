---
layout: post
title: Crawl Websites for Errors in Ruby with Anemone
---

Say you've just been handed a project from some outsourced programmers. Or been put in charge of maintaining some legacy website. Or have to deploy a Drupal/Joomla/Wordpress/whatever site. Naturally, there are no tests. 

This ruby script could help you out. It crawls a website, looking for links which returns HTTP error codes. [All the HTTP status codes over 400 indicate an error of some kind.](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

Of course, testing isn't something you should just bolt on at the end a project, but at least this is better than nothing. 

You can use it to look for dead links and ensuring that all pages actually render.

If the website is written in a framework, you could extend the script to look for debug output using [Nokogiri](http://nokogiri.org/), making sure that debug mode is turned off.

Since it exits with code 1, you could add it as build step in Jenkins (or the continuous integration service of your choice) and have the build fail if any errors are encountered.

### The code:

<script src="https://gist.github.com/saltvedt/6252198.js"> </script>

### How to use it:

	$ gem install anemone
	...
	$ ruby crawl_for_errors.rb http://saltvedt.github.io
	4 pages crawled. Everything OK!
