import { ParseJsonService } from "./parse-json.service";
import { TasksService } from "./tasks.service";
import { CommentsService } from "./comments.service";

export class NextWeekService {
  constructor(
    private parseJsonService: ParseJsonService,
    private tasksService: TasksService,
    private commentsService: CommentsService
  ) {}

  generateExerciseTasks() {
    this.parseJsonService
      .parseJsonFromFile("tasks.json")
      .then((tasks) => {
        tasks.forEach((task) => {
          task.days.forEach((day) => {
            this.tasksService
              .createTask({
                content: task.content,
                due_string: day,
                project_id: task.projectId,
                section_id: task.sectionId,
              })
              .then((createdTask) => {
                task.comments?.forEach((comment) => {
                  this.commentsService.addCommentToTask({
                    task_id: createdTask.id,
                    content: comment,
                  });
                });
              })
              .catch((error) => {
                console.error(error);
              });
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
