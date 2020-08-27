---
layout: page
permalink: /education_teaching/
title: education and teaching
description:
nav: true
order: 2

---
## Academic Qualification
<div class="row">
  <div class="education col-sm-12">
	<ol>
		{% for entry in site.data.formal_education %}
		<li>		
			<b>{{entry.title}}</b> (GPA: {{entry.gpa}})<br>
			{{entry.location}}<br>
			{{entry.time}}<br>
		    <span class="links">
		      [<a class="featured_content">content</a>]
		    </span>
	        <span class="featured_content hidden">
	    	  <p>{{entry.content}}</p>
			</span>
		</li>
		{% endfor %}
	</ol>
  </div>
</div>
---

## Teaching Experience
<div class="row">
  <div class="education col-sm-12">
	<ol>
		{% assign sorted_teaching = site.data.teaching | sort: "year" | reverse %}
		{% for entry in sorted_teaching %}
		<li>		
			<b>{{entry.title}}</b> ({{entry.duration}})<br>
			{{entry.location}}, {{entry.year}}<br>
		    <span class="links">
		      {% if entry.content %}
		      [<a class="featured_content">content</a>]
		      {% endif %}
		      {% if entry.link %}
		      [<a href="{{entry.link}}" class="course_link">course page</a>]
		      {% endif %}
		      {% if entry.audit %}
		      [<a class="certificate">audit only</a>]
  		      {% elsif entry.certificate %}
		      [<a href="{{ entry.certificate | prepend: '/assets/pdf/' | relative_url }}" target="_blank" class="certificate">certificate</a>]
		      {% endif %}
		    </span>
		    {% if entry.content %}
	        <span class="featured_content hidden">
	    	  <p>{{entry.content}}</p>
			</span>
			{% endif %}
		</li>
		{% endfor %}
	</ol>
  </div>
</div>
---

## Additional Education
{% for category in site.data.courses %}
#### {{category.name}}
<div class="row">
  <div class="education col-sm-12">
	<ol>
		{% assign sorted_courses = category.courses | sort: "year" | reverse %}
		{% for entry in sorted_courses %}
		<li>		
			<b>{{entry.title}}</b> ({{entry.duration}})<br>
			{{entry.location}}, {{entry.year}}<br>
		    <span class="links">
		      {% if entry.content %}
		      [<a class="featured_content">content</a>]
		      {% endif %}
		      {% if entry.link %}
		      [<a href="{{entry.link}}" class="course_link">course page</a>]
		      {% endif %}
		      {% if entry.audit %}
		      [<a class="audit">audit only</a>]
  		      {% elsif entry.certificate %}
		      [<a href="{{ entry.certificate | prepend: '/assets/pdf/' | relative_url }}" target="_blank" class="certificate">certificate</a>]
		      {% endif %}
		    </span>
		    {% if entry.content %}
	        <span class="featured_content hidden">
	    	  <p>{{entry.content}}</p>
			</span>
			{% endif %}
		</li>
		{% endfor %}
	</ol>
  </div>
</div>
{% endfor %}