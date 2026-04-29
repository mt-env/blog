---
title: Front Page
layout: base.njk
---

first page :3

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}
