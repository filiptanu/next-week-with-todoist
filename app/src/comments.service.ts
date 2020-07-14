import { RequestService } from "./request.service";
import { CreateCommentDto } from "./dto/create-comment.dto";

export class CommentsService {
  constructor(private requestService: RequestService) {}

  addCommentToTask(createCommentDto: CreateCommentDto): Promise<any> {
    return this.requestService.post("comments", createCommentDto);
  }
}
