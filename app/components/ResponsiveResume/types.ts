// Interface for header section
export interface Header {
  name: string;
  title: string;
  email: string;
  location: string;
  links: {
    github: string;
    linkedin: string;
  };
}

// Interface for brand statement section
export interface BrandStatement {
  title: string;
  statement: string;
}

// Interface for project entries
export interface Project {
  title: string;
  date: string;
  description: string;
}

// Interface for work experience entries
export interface WorkExperience {
  title: string;
  company: string;
  date: string;
  description: string;
}

// Interface for education entries
export interface Education {
  degree: string;
  institution: string;
  year: string;
}

// Interface for skills section
export interface Skills {
  title: string;
  description: string;
}

// Interface for the entire content object
export interface ResumeContent {
  header: Header;
  brandStatement: BrandStatement;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skills;
}
