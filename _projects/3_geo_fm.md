---
layout: page
title: Geostationary satellite foundation model
description: Training data for a foundation model from GOCI-II and GK2A AMI
importance: 3
category: research
---

<!-- TODO: describe your role and the model goal; add a figure (e.g., a tile example) as img: in the header -->

Foundation models need large, consistent, analysis-ready training data.
This project prepares paired training data from two Korean geostationary satellites: **GOCI-II** (12-band top-of-atmosphere reflectance at 250 m) and **GK2A AMI** (16 channels of reflectance and brightness temperature).

- GK2A AMI is placed on exactly the same tiles as GOCI-II: 144 fixed 224 × 224 windows.
- The pipeline builds a grid at multiple resolutions (250 m to 2 km), catalogues scenes, checks projections and tile boundaries, and processes the full period.

_Work in progress._
