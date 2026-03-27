import { Eye, Camera, ShieldAlert, Layers, Brain } from "lucide-react";

const areas = [
  {
    icon: Eye,
    title: "Age Estimation & Face Analysis",
    description: "Deep learning frameworks for age progression, bias mitigation, kinship verification, and robust face embeddings.",
  },
  {
    icon: Camera,
    title: "Camera Localization",
    description: "Transformer-based architectures and hypernetworks for accurate camera pose estimation across diverse environments.",
  },
  {
    icon: ShieldAlert,
    title: "Deepfake Generation & Detection",
    description: "Photo-realistic face swapping (FSGAN) and detection methods analyzing discrepancies between faces and contexts.",
  },
  {
    icon: Layers,
    title: "Multisensor Data Matching",
    description: "Attention-based methods for matching and analyzing data from thermal, infrared, and RGB cameras.",
  },
  {
    icon: Brain,
    title: "Deep Learning Research",
    description: "Multimodal learning, coreset selection, depth estimation, image-text retrieval, and OCR for ancient scripts.",
  },
];

const ResearchSection = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Research</h2>
        <p className="section-subtitle">
          At the intersection of computer vision, deep learning, and signal processing
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="p-6 rounded-lg bg-background border border-border hover:border-accent/40 transition-colors group"
            >
              <area.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
