export interface Realm {
  id: string;
  type: "primary" | "pseudo";
  label: string;
  description: string;
  linkType?: "internal" | "external";
  href?: string;
  disabled?: boolean;
  position?: { x: number; y: number }; // For custom positioning
}

export const CORE_NODE = {
  id: "core",
  label: "Artiligenz",
  description: "Universal Artificial Intelligence Gateway",
};

export const REALMS: Realm[] = [
  {
    id: "ai-hub",
    type: "primary",
    label: "AI Information Hub",
    description: "Live AI news, insights & breakthroughs",
    linkType: "internal",
    href: "/ai-hub",
  },
  {
    id: "ai-directory",
    type: "primary",
    label: "AI Directory",
    description: "Explore AI products, tools & ecosystems",
    linkType: "internal",
    href: "https://artiligenz-ai-directory.onrender.com",
  },
  {
    id: "future-athlete",
    type: "pseudo",
    label: "Future Athlete",
    description: "Performance & human potential (coming soon)",
    disabled: true,
  },
  {
    id: "enterprise-universe",
    type: "pseudo",
    label: "Enterprise Universe",
    description: "AI in organisations & work (coming soon)",
    disabled: true,
  },
  {
    id: "learning-nexus",
    type: "pseudo",
    label: "Learning Nexus",
    description: "Knowledge & education systems (coming soon)",
    disabled: true,
  },
];
