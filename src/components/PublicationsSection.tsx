const publications = [
  { authors: "G. Shapira, I. Goldin, E. Artyomov, D. Kim, Y. Keller, and N. Zehngut", title: "GazeShift: Unsupervised Gaze Estimation and Dataset for VR", venue: "CVPR 2026", badge: "New" },
  { authors: "R. Ferens and Y. Keller", title: "HyperPose: Hypernetwork-Infused Camera Pose Localization", venue: "CVPR 2025" },
  { authors: "S. Dekel, Y. Keller, M. Cadík", title: "Estimating Extreme 3D Image Rotation with Transformer Cross-Attention", venue: "CVPR 2024" },
  { authors: "G. Shapira and Y. Keller", title: "FaceCoresetNet: Differentiable Coresets for Face Set Recognition", venue: "AAAI 2024" },
  { authors: "S. Hiba and Y. Keller", title: "Hierarchical Attention-based Age Estimation and Bias Estimation", venue: "IEEE TPAMI, 2023" },
  { authors: "Y. Shavit, R. Ferens, Y. Keller", title: "Coarse-to-Fine Multi-Scene Pose Regression with Transformers", venue: "IEEE TPAMI, 2023" },
  { authors: "Y. Nirkin, T. Hassner, and Y. Keller", title: "FSGANv2: Better Subject Agnostic Face Swapping and Reenactment", venue: "IEEE TPAMI, 2023" },
  { authors: "A. Moreshet and Y. Keller", title: "Attention-Based Multimodal Image Matching", venue: "CVIU, 2023" },
  { authors: "Y. Nirkin, T. Hassner, Y. Keller, and L. Wolf", title: "DeepFake Detection Based on Discrepancies Between Faces and their Context", venue: "IEEE TPAMI, 2022" },
  { authors: "E. Ben Baruch and Y. Keller", title: "Joint Detection and Matching of Feature Points in Multimodal Images", venue: "IEEE TPAMI, 2022" },
  { authors: "N. Malali and Y. Keller", title: "Learning to Embed Semantic Similarity for Joint Image-Text Retrieval", venue: "IEEE TPAMI, 2022" },
  { authors: "Y. Shavit and Y. Keller", title: "Camera Pose Auto-Encoders for Improving Pose Regression", venue: "ECCV 2022" },
  { authors: "E. Dahan and Y. Keller", title: "A Unified Approach to Kinship Verification", venue: "IEEE TPAMI, 2021" },
  { authors: "Y. Shavit, R. Ferens, Y. Keller", title: "Learning Multi-Scene Absolute Pose Regression with Transformers", venue: "ICCV 2021" },
  { authors: "Y. Nirkin, T. Hassner, and Y. Keller", title: "FSGAN: Photo-realistic model-free video face swapping and reenactment", venue: "ICCV 2019" },
  { authors: "O. Sendik and Y. Keller", title: "DeepAge: Deep Learning of Face-Based Age Estimation", venue: "Signal Processing: Image Communication, 2019" },
];

const PublicationsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="accent-line" />
        <h2 className="section-heading">Selected Publications</h2>
        <p className="section-subtitle">Key contributions in top venues</p>
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <div key={i} className="flex gap-4 items-start group">
              <span className="text-accent/50 font-display text-sm font-medium pt-1 min-w-[2rem] text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="border-b border-border pb-4 flex-1">
                <p className="font-display font-semibold text-foreground group-hover:text-accent transition-colors inline-flex items-center gap-2">
                  {pub.title}
                  {pub.badge && (
                    <span className="text-xs font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      {pub.badge}
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {pub.authors} · <span className="italic">{pub.venue}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
