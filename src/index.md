---
title: blog
layout: base.njk
---

a collection of my thoughts

{% for post in collections.posts %}
**[{{ post.data.title }}]({{ post.url }})**
<br>
{%- endfor %}
