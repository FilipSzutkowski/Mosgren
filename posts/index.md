---
layout: base
pagination:
  data: collections.post
  size: 6
eleventyExcludeFromCollections: true
permalink: /posts/{{pagination.pageNumber}}/
---

<h1 class="upcomingEventsHeader">All Events</h1>

<section id="upcomingEvents" class="allPosts">
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
</section>
