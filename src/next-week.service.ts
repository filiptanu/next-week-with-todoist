import { TasksService } from "./tasks.service";
import { CommentsService } from "./comments.service";

export class NextWeekService {
  constructor(
    private tasksService: TasksService,
    private commentsService: CommentsService
  ) {}

  generateExerciseTasks() {
    const personalProjectId: number = Number(process.env.PERSONAL_PROJECT_ID);
    const exerciseSectionId: number = Number(process.env.EXERCISE_SECTION_ID);

    const days = process.env.DAYS?.split(";");
    const exercises = process.env.EXERCISES?.split(";");
    const absVideosUrls = process.env.ABS_VIDEO_URLS?.split(";");

    exercises?.forEach((exercise) => {
      days?.forEach(async (day) => {
        this.tasksService
          .createTask({
            content: exercise,
            due_string: day,
            project_id: personalProjectId,
            section_id: exerciseSectionId,
          })
          .then((task) => {
            if (exercise.toLowerCase() === "abs") {
              absVideosUrls?.forEach((url) =>
                this.commentsService.addCommentToTask({
                  task_id: task.id,
                  content: url,
                })
              );
            }
          });
      });
    });
  }
}
