import { RequestService } from "./request.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskResponseDto } from "./dto/task-response.dto";

export class TasksService {
  constructor(private requestService: RequestService) {}

  createTask(createTaskDto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.requestService.post("tasks", createTaskDto);
  }
}
