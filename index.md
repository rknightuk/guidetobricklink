---
layout: default
permalink: /index.html
---

## What is Bricklink?

[Bricklink](http://bricklink.com) is a marketplace for buying individual Lego pieces, minifigures, and sets. Bricklink has nearly 10,000 stores in over 70 countries, and thier catalog contains over 9 million items for sale. 

## Why does this site exist?

Given the size and age of Bricklink (it's been around since 2000) the interface is not the most intuitive. For a new buyer, Bricklink can be daunting (a quick search of [/r/lego](https://www.reddit.com/r/lego) shows a huge number of people asking how to use Bricklink). Guide to Bricklink aims to be the ultimate guide to using all the features Bricklink has to offer.

<p class="guide-search"><input type="text" placeholder="Search the guides" class="guide-search-input"></p>

<div class="list-group guides">
	{% for site_page in site.pages %}
		{% if site_page.type == 'guide' %}
			<a href="{{ site_page.url | prepend: site.baseurl }}" class="list-group-item guide-item">{{ site_page.title }}</a>
		{% endif %}
	{% endfor %}
	<li class="list-group-item no-results" style="display: none;">No guides found. Something you think should be here? Let us know <a href="https://twitter.com/studshq" target="_blank">on Twitter</a></li>.
</div>