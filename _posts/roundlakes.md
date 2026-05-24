---
layout: post
title: Round Lakes
date: 2025-11-19
description: a gif of increasingly round lakes
tags: images, code, fun
categories: 
featured: false
---

While working with the LAGOS database, I have realized that there are many lakes with the name "Round Lake", many of which I would not actually describe as round. After seeing [an animation](https://www.reddit.com/r/dataisbeautiful/comments/u1zncb/oc_100_lakes_from_least_to_most_circular_animated/) on r/dataisbeautiful, I made this gif for fun in RStudio. It takes every lake in the LAGOS database with the name "Round Lake" and sorts them in increasing order of roundness using the lakes' shoreline development index (the ratio of the length of the lake's shoreline to the circumference of a circle with the same area as the lake). I don't think there's really a practical use for this, but it's a fun visualization!

<div class="text-center">
  <img src="{{ '/assets/img/IMG_0740.GIF' | relative_url }}" alt="round lakes" style="width: 50%;">
</div>
