---
layout: page
title: Agentic AI for urban flooding
description: An LLM decision agent for 12-hour-ahead flood alerts in Seoul
img: assets/img/projects/flood_agent_flowchart.png
importance: 2
category: research
---

<!-- TODO: say whether this was a team / class project and what your role was -->

City flood warnings need more than a risk map: forecasters must know _why_ an area is at risk and whether the evidence supports the prediction.
This project builds an **agentic AI system** for the Dorimcheon pilot area in Seoul that issues 12-hour-ahead flood alerts.

- **Flood-risk model:** a frozen ensemble (LightGBM, XGBoost, CatBoost, Random Forest) rerun with LDAPS forecast rainfall in place of observed rainfall, giving risk, ensemble uncertainty, and SHAP drivers.
- **Decision agent:** a LangGraph ReAct agent that calls six tools (risk ranking, driver explanation, sewer-sensor evidence, and more), checks the forecast against independent observations, and writes a briefing with recommended actions.
- **Automation:** new LDAPS forecasts are detected and processed automatically, with an HTML report generated for each issuance.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/flood_agent_flowchart.png" title="Agentic flood decision system" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System design: the decision agent coordinates the flood-risk model and the data agent, then checks consistency before issuing a briefing.
</div>
