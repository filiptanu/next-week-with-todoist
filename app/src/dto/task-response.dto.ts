export class TaskResponseDto {
  constructor(
    id: number,
    project_id: number,
    section_id: number,
    order: number,
    content: string,
    completed: boolean,
    label_ids: number[],
    priority: number,
    comment_count: number,
    created: string,
    due: { recurring: boolean; string: string; date: string },
    url: string
  ) {}

  get id(): number {
    return this.id;
  }
}
