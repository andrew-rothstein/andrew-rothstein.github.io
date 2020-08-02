---
layout: page
permalink: /honors/
title: honors
description:
nav: false
order: 10

---
{% for entry in site.data.honors %}
<div class="row honor">
	<div class="col-md-10 title"><b>{{entry.title}}</b></div>
	<div class="col-md-2 year">{{entry.year}}</div>
</div>
{% endfor %}