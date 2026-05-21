---
layout: page
title: UMBS
description: my time as the field technician at the University of Michigan Biological Station
img: assets/img/biostation pic.jpeg
importance: 2
category: work
giscus_comments: false
---

I spent the summer of 2024 as the inaugural field technician at the University of Michigan Biological Station. My job was to be a "field tech for hire" who worked with visiting researchers at the station to accomplish the field component of their projects. This meant I was able to learn a wide variety of field techniques across the field of ecology, from building mesocosms to catching bumblebees and collecting strawberries. When not working directly with researchers, I helped digitize the station's herbarium, restored the mammal collection, and mapped out important ecological sites including a hemlock stand and beaver dams.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mesocosm.JPEG" title="mesocosm" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mesocosm2.jpeg" title="more mesocosms" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Memories of mesocosms. left: A mesocosm that I assembled for an overwintering study of pitcher plants for Dr. Will Petry and Nicole Burrough (NCSU). right: One of 40 mesocosms that I built and assembled for Dr. J.P. Lessard (Concordia University). 
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mammals.jpeg" title="mammal specimens" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/strawberry.jpeg" title="Fragaria virginiana" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/bee.jpeg" title="Bombus ternarius" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    More pictures. left: Some of the mammal specimens that I helped restore. middle: Measuring and collecting strawberries for Dr. Mary Jamieson (Oakland University). right: A sleepy tricolored bumblebee that I caught during a bumblebee survey for Dr. Jamieson and Danielle Dorsen.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
