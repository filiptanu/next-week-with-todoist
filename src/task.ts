export interface Task {
  content: string;
  days: string[];
  projectId: number;
  sectionId?: number;
  comments?: string[];
}
