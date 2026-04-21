export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  targetUsers?: string[];
  challenges?: {
    title: string;
    items: string[];
  }[];
  dataBacking?: string[];
  metrics?: {
    label: string;
    value: string;
    target: string;
  }[];
  team?: {
    composition: string;
    role: string[];
  };
  uxImprovements?: {
    title: string;
    items: string[];
  }[];
  userTests?: {
    methods: string[];
    findings: string[];
  };
  chartData?: {
    labels: string[];
    datasets: {
      label: string;
      data: (number | null)[];
      color: string;
    }[];
  };
  techStack: {
    name: string;
    reasons: string[];
  }[];
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  types: string[];
  message: string;
}
