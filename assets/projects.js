/*
  Project list for the site. Add a project by copying one entry and editing it.
  No changes to index.html are needed.

  Fields
  ------
  id         short unique slug (letters, digits, hyphens)
  title      card title
  category   "data-science" | "ml-dl" | "applied-ai" | "research"
  status     "Completed" | "Live" | "In progress" | "Coming soon"
  featured   true to show in "Featured projects"
  visual     thumbnail style: "research" | "playground" | "bars" | "scatter" | "segmentation"
             | "confusion" | "forecast" | "detect" | "agent" | "embedding" | "rag" | "candles"
  image      optional path to a real screenshot/plot (e.g. "assets/img/seg.png"); replaces the generated thumbnail
  summary    one or two sentences for the card
  tags       short list of methods/tools
  problem, dataset, approach, architecture, metrics, results, learned
             detail fields shown in the project window; leave out any that are not ready yet
  links      list of {label, href}
*/
window.PROJECTS = [
  {
    id: "phd-research",
    title: "PhD Research: Machine Learning for Atmospheric Data",
    category: "research",
    status: "Completed",
    featured: true,
    visual: "research",
    summary: "Machine learning and deep learning on millions of multi-source measurements: correcting systematic errors, merging data sources and filling missing values, validated on held-out locations and periods.",
    tags: ["Large-scale data", "Data integration", "XGBoost", "Spatio-temporal DL", "Validation"],
    problem: "Satellite measurements of an atmospheric gas carry systematic errors and leave large gaps where clouds or orbits block the view. Downstream models that estimate emissions need data that is both accurate and complete.",
    dataset: "Millions of measurements from several satellite sensors, ground-station reference data, and gridded environmental features covering the whole globe from 2020 onward.",
    approach: "1) Learn and remove each sensor's systematic error with gradient-boosted models and staged feature selection. 2) Harmonize the sources to one reference and fuse them into a single daily dataset. 3) Fill remaining gaps with spatio-temporal deep learning. 4) Feed the improved data into emission-estimation (inversion) models.",
    architecture: "Gradient-boosted trees and random forests for correction, SHAP for interpretation; deep learning with state-space (Mamba) and KAN layers for spatio-temporal gap-filling.",
    metrics: "R², RMSE and bias, using leave-one-site, leave-one-month and leave-one-year cross-validation plus spatial hold-outs.",
    results: "Published fused global daily dataset: R² 0.81 and RMSE 10.78 ppb at ground sites withheld from training (Atmospheric Measurement Techniques, 2026). Gap-filling and inversion work in progress.",
    links: [
      { label: "Paper", href: "https://doi.org/10.5194/amt-19-4313-2026" },
      { label: "Dataset", href: "https://doi.org/10.5281/zenodo.18714292" }
    ]
  },
  {
    id: "nn-playground",
    title: "Neural network playground",
    category: "ml-dl",
    status: "Live",
    featured: true,
    visual: "playground",
    summary: "The interactive demo at the top of this page: a small neural network written from scratch that learns a nonlinear decision boundary live in the browser.",
    tags: ["Neural networks", "Backpropagation", "JavaScript", "Visualization"],
    problem: "Show, interactively, how a neural network learns to separate classes that no straight line can split.",
    approach: "A 2-16-16-1 multilayer perceptron with tanh activations, trained with per-sample stochastic gradient descent on binary cross-entropy. Backpropagation is implemented by hand, without libraries.",
    results: "Runs live on this page. Visitors can add points or load Moons, Circles and XOR datasets and watch the decision boundary update.",
    links: [
      { label: "Try it", href: "#top" },
      { label: "Code", href: "https://github.com/yixi-k/yixi-k.github.io" }
    ]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI application",
    category: "applied-ai",
    status: "Coming soon",
    featured: true,
    visual: "agent",
    summary: "An LLM agent that plans, calls tools and works through a multi-step data task.",
    tags: ["LLM agents", "Tool use", "Workflows"]
  },
  {
    id: "predictive-analytics",
    title: "Predictive analytics",
    category: "data-science",
    status: "Coming soon",
    visual: "scatter",
    summary: "End-to-end predictive modelling on a tabular dataset: EDA, feature engineering, model comparison and evaluation.",
    tags: ["EDA", "Feature engineering", "Regression", "Classification"]
  },
  {
    id: "business-intelligence",
    title: "Business intelligence and data analysis",
    category: "data-science",
    status: "Coming soon",
    visual: "bars",
    summary: "Statistical analysis and dashboards on business data, turned into clear, decision-ready findings.",
    tags: ["Statistics", "Business analytics", "Visualization"]
  },
  {
    id: "image-segmentation",
    title: "Image segmentation",
    category: "ml-dl",
    status: "Coming soon",
    visual: "segmentation",
    summary: "A pixel-level segmentation model, from data pipeline and training to mask quality metrics.",
    tags: ["Computer vision", "Segmentation", "PyTorch"]
  },
  {
    id: "image-classification",
    title: "Image classification",
    category: "ml-dl",
    status: "Coming soon",
    visual: "confusion",
    summary: "CNN and Transformer image classifiers compared on the same data, with per-class evaluation.",
    tags: ["Computer vision", "CNNs", "Transformers"]
  },
  {
    id: "time-series-forecasting",
    title: "Time-series forecasting",
    category: "ml-dl",
    status: "Coming soon",
    visual: "forecast",
    summary: "Deep learning forecasts compared against classical baselines, with honest back-testing.",
    tags: ["Time series", "Forecasting", "Deep learning"]
  },
  {
    id: "computer-vision-app",
    title: "Computer vision application",
    category: "ml-dl",
    status: "Coming soon",
    visual: "detect",
    summary: "A practical vision tool that runs a trained model on new images.",
    tags: ["Computer vision", "Deployment"]
  },
  {
    id: "foundation-models",
    title: "Foundation model experiments",
    category: "applied-ai",
    status: "Coming soon",
    visual: "embedding",
    summary: "Adapting large pretrained models to new data with embeddings and fine-tuning.",
    tags: ["Foundation models", "Fine-tuning", "Embeddings"]
  },
  {
    id: "llm-rag",
    title: "LLM application with retrieval",
    category: "applied-ai",
    status: "Coming soon",
    visual: "rag",
    summary: "An LLM-powered tool that answers questions from a document collection using retrieval-augmented generation.",
    tags: ["LLMs", "RAG", "Vector search"]
  },
  {
    id: "quant-trading",
    title: "Quantitative trading experiments",
    category: "applied-ai",
    status: "Coming soon",
    visual: "candles",
    summary: "Signals and back-tests on financial market data, evaluated with risk-aware metrics.",
    tags: ["Quant", "Financial data", "Back-testing"]
  }
];
