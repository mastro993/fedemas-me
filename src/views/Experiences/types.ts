export type WorkExperienceType = "internship" | "full-time";

export type WorkExperienceRole = {
  role: string;
  startDate: Date;
  endDate?: Date;
  type: WorkExperienceType;
  summary?: string;
};

export type WorkExperienceItem = {
  companyName: string;
  companyLogoSrc: string;
  location: string;
  roles: WorkExperienceRole[];
  skills?: string[];
};
