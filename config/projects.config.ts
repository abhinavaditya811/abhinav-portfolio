/**
 * Projects Configuration
 *
 * Hand-curated flagship projects. Breadth (and freshness) is carried by the
 * live GitHub section - tag a repo with the `showcase` topic on GitHub to
 * surface it there. Keep this list short and high-signal.
 */

export interface ProjectItem {
  name: string;
  url: string;
  description: string;
  // Tech stack tags (rendered as chips)
  tech?: string[];
  // Optional flag for in-progress work
  ongoing?: boolean;
  // Optional accolade line (award, venue, etc.)
  badge?: string;
}

export const projectsConfig = {
  title: "Featured Projects",
  items: [
    {
      name: "Settl - Autonomous AI Invoice Recovery",
      url: "https://github.com/abhinavaditya811/settl",
      description:
        "A multi-agent system that autonomously recovers unpaid invoices - a 5-stage pipeline on GCP Vertex AI Agent Builder with Gemini 3 Pro. Shipped the deterministic strategy agent and compliance gate (28 passing tests), with a source-agnostic ingestion layer and a full decision audit trail.",
      tech: ["Vertex AI", "Gemini 3 Pro", "Multi-Agent", "GCP"],
      ongoing: true,
    },
    {
      name: "Workhuman HR Analytics Capstone",
      url: "https://github.com/carnageitself/HR-Capstone",
      description:
        "A 4-stage LLM document-processing pipeline over 1,000+ unstructured records - Llama-3-8B for NER + behavioral extraction, HDBSCAN clustering, and a Claude-seeded taxonomy, with SLM/LLM routing for a ~10x cost cut.",
      tech: ["Llama 3", "Claude", "HDBSCAN", "NER"],
      badge: "Nominated - Ferretti & Yamamura Award",
    },
    {
      name: "CiteConnect - Semantic Academic Search",
      url: "https://github.com/Cite-Connect",
      description:
        "Production MLOps pipeline (GitHub Actions, Docker, Airflow) deploying MiniLM-L6-v2 + SPECTER2 to GCP Cloud Run / Kubernetes with drift-triggered retraining, plus a RAG layer over Pinecone indexing 100K+ docs with hybrid semantic + citation-graph search.",
      tech: ["MLOps", "Pinecone", "RAG", "Kubernetes"],
      badge: "Presented at Google Expo, Cambridge",
    },
    {
      name: "BIBOT - Business Intelligence Bot",
      url: "https://github.com/heisenberg1804/BIBOT-genBi-hackathon",
      description:
        "A LangChain multi-agent chatbot, built in a hackathon sprint, that turns user-uploaded CSVs into business-intelligence insights and visualisations.",
      tech: ["LangChain", "Multi-Agent", "Python"],
    },
  ] as ProjectItem[],
};

export type ProjectsConfig = typeof projectsConfig;
