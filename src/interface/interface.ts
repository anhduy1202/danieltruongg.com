export interface navLink {
  title: string;
  href: string;
}

export type languageType = {
  key: string;
  name: string;
  icon: string;
};

export interface projectType {
  id: number;
  thumbnail: string;
  desktop: string;
  link: string;
  title: string;
  languages: languageType[];
  description: string;
}

export interface experienceType {
  id: string;
  companies: string;
  role: string;
  date: string;
  description: string[];
  link: string;
}

export interface contactType {
  id: string;
  link: string;
  logo: string;
}
