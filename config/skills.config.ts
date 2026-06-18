/**
 * Skills Configuration
 *
 * Grouped technical stack, sourced from the résumé. Rendered as an
 * instrument-panel matrix.
 */

export interface SkillGroup {
  // Group label (monospace category)
  category: string;
  // Individual skills/tools
  items: string[];
}

export const skillsConfig = {
  title: "Stack",
  groups: [
    {
      category: "Applied AI / LLMs",
      items: [
        "LLMs & SLMs",
        "RAG",
        "Document Processing",
        "Chunking & Retrieval",
        "Multi-Agent Orchestration",
        "Vertex AI Agent Builder",
        "Gemini 3 Pro",
        "NER & Extraction",
        "Fine-Tuning",
        "LangChain",
        "LangGraph",
        "Pinecone",
      ],
    },
    {
      category: "Eval & Monitoring",
      items: [
        "Model Evaluation",
        "precision@K",
        "A/B Testing",
        "Drift Detection",
        "Automated Retraining",
        "Prometheus",
        "Grafana",
        "MLflow",
        "SHAP",
      ],
    },
    {
      category: "Infra & MLOps",
      items: [
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "Airflow",
        "Terraform",
        "RESTful APIs",
        "FastAPI",
      ],
    },
    {
      category: "Cloud",
      items: ["GCP", "Vertex AI", "Cloud Run", "BigQuery", "AWS", "EC2", "S3"],
    },
    {
      category: "Data Engineering",
      items: [
        "ETL Pipelines",
        "SQL",
        "Spark",
        "Kafka",
        "Statistical Modeling",
        "Time-Series",
        "Feature Engineering",
      ],
    },
    {
      category: "Deep Learning & NLP",
      items: [
        "PyTorch",
        "TensorFlow",
        "Hugging Face",
        "Transformers",
        "SentenceTransformers",
        "NLTK",
      ],
    },
    {
      category: "Languages & Libraries",
      items: [
        "Python",
        "SQL",
        "C++",
        "JavaScript",
        "TypeScript",
        "Bash",
        "scikit-learn",
        "Pandas",
        "NumPy",
        "Plotly",
        "Seaborn",
      ],
    },
  ] as SkillGroup[],
};

export type SkillsConfig = typeof skillsConfig;
