export interface JobItem {
  companyName: string,
  companyLogoSrc: string,
  startDate: Date,
  endDate?: Date,
  location: string,
  role: string,
  type: string,
  summary?: string
}