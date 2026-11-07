---
layout: page
title: Global fused XCH₄
description: A daily 0.1° methane record from GOSAT, GOSAT-2, and TROPOMI
img: assets/img/projects/fused_map_2023.png
importance: 1
category: research
related_publications: true
---

No single satellite gives complete, consistent methane coverage: GOSAT and GOSAT-2 are precise but sparse, while TROPOMI has dense coverage but sensor-specific biases.
This project combines all three into one global, daily, 0.1° land XCH₄ product for 2020–2023, in three steps:

1. **Bias correction:** machine learning models correct each sensor against TCCON ground stations.
2. **Harmonization:** TROPOMI and GOSAT are mapped onto GOSAT-2, the sensor with the best agreement with TCCON.
3. **Fusion:** pixels are filled in priority order GOSAT-2 → TROPOMI → GOSAT.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/fused_map_2023.png" title="Fused XCH4 annual mean 2023" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Annual mean fused XCH₄ for 2023.
</div>

At TCCON stations never used in training, the fused product reaches R² = 0.81 and RMSE = 10.8 ppb, and it adds 2–10% coverage in data-sparse regions.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/fused_validation.png" title="Validation at withheld TCCON sites" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hotspot_persistence.png" title="Hotspot persistence 2020-2023" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: validation at withheld TCCON sites. Right: how many years (2020–2023) each region was a methane hotspot.
</div>

**Paper:** [AMT, 2026](https://doi.org/10.5194/amt-19-4313-2026) · **Data:** [Zenodo](https://doi.org/10.5281/zenodo.20304047)
