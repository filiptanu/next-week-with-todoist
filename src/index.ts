import * as dotenv from "dotenv";

dotenv.config();

import { RequestService } from "./request.service";
import { TasksService } from "./tasks.service";
import { CommentsService } from "./comments.service";
import { NextWeekService } from "./next-week.service";

const requestService = new RequestService();
const tasksService = new TasksService(requestService);
const commentsService = new CommentsService(requestService);
const nextWeekService = new NextWeekService(tasksService, commentsService);

nextWeekService.generateExerciseTasks();
