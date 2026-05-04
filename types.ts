export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  tags: string[];
  gridSpan?: string; // Tailwind grid span classes
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
}
