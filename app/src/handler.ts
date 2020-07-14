import { Handler, Context, Callback } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}

export const handler: Handler = (
  event: any,
  context: Context,
  callback: Callback
) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World - Next Week with Todoist!",
      event: event,
    }),
  };

  callback(undefined, response);
};
