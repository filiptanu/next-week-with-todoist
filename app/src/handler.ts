import { Handler, Context, Callback } from "aws-lambda";
import { ParseJsonService } from "./parse-json.service";
import { RequestService } from "./request.service";
import { TasksService } from "./tasks.service";
import { CommentsService } from "./comments.service";
import { NextWeekService } from "./next-week.service";

interface HelloResponse {
  statusCode: number;
  body: string;
}

export const handler: Handler = (
  event: any,
  context: Context,
  callback: Callback
) => {
  const parseJsonService = new ParseJsonService();
  const requestService = new RequestService();
  const tasksService = new TasksService(requestService);
  const commentsService = new CommentsService(requestService);
  const nextWeekService = new NextWeekService(
    parseJsonService,
    tasksService,
    commentsService
  );

  nextWeekService.generateExerciseTasks();

  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Next Week with Todoist - successfully added tasks for next week",
      event: event,
    }),
  };

  callback(undefined, response);
};
