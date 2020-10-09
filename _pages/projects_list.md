---
layout: page
title: projects
permalink: /projects/
description:
nav: true
order: 5
---
<table class="table projects-table">
<thead>
  <tr>
    <th width="55%">Title</th>
    <th width="15%">Supervisor(s)</th>
    <th width="15%">Stage</th>
    <th width="15%">Methods</th>
  </tr>
</thead>
<tbody>
{% for entry in site.data.projects %}
  <tr>
    <td>{{entry.title}}</td>
    <td>{{entry.supervisor}}</td>
    <td>{{entry.stage}}</td>
    <td>{{entry.tools}}</td>
  </tr>
{%endfor%}
</tbody>
</table>