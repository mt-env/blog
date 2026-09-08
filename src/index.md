---
title: blog
layout: base.njk
---

a collection of my thoughts

<small>// newest posts first</small>

{% for post in collections.posts reversed %}
1. **[{{ post.data.title }}]({{ post.url }})**
<br>
{%- endfor %}
