---
layout: base
pagination:
  data: collections.post
  size: 6
eleventyExcludeFromCollections: true
permalink: /posts/{{pagination.pageNumber}}/
---

<nav aria-label="navbar" class="post">
  <a href="/">
    <img
      src="/assets/images/landingLogo.svg"
      alt="Mosgren logo, click to go to the main page"
      class="navbarLogo"
  /></a>
  <a href="/#upcomingEvents" class="eventsNav">Events</a>
  <a href="/posts/" class="eventsNav">About</a>
  <a href="/#contactUs" class="contactNav">Contact</a>
</nav>

<h1 class="upcomingEventsHeader">All Events</h1>

<section id="upcomingEvents" class="allPosts">

{% include "pagination.njk" %}

  <div class="events">
{%- for item in pagination.items -%}

<article class="eventCard">
  <img src="{{item.data.thumbnail}}" alt="{{item.title}}">
  <p>{{ item.date | simpleDate}}</p>
  <h3><span>{{ item.data.title }}</span></h3>
  <p>{{ item.data.summary }}</p>
  <a href="{{ item.url | url}}">Read More</a>
</article>

{%- endfor -%}

  </div>

{% include "pagination.njk" %}

</section>
