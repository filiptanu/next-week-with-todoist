import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as awsEventsTargets from "@aws-cdk/aws-events-targets";
import * as awsEvents from "@aws-cdk/aws-events";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(
      this,
      "NextWeekWithTodoistLambda",
      {
        runtime: lambda.Runtime.NODEJS_12_X,
        handler: "handler.handler",
        code: lambda.Code.fromAsset(path.join("..", "app", "dist")),
        environment: {
          API_TOKEN: process.env.API_TOKEN ? process.env.API_TOKEN : "",
        },
        timeout: cdk.Duration.seconds(30),
        retryAttempts: 0,
      }
    );

    const lambdaAwsEventTarget = new awsEventsTargets.LambdaFunction(
      lambdaFunction
    );

    const cronAwsEvent = new awsEvents.Rule(
      this,
      "NextWeekWithTodoistCronRule",
      {
        schedule: awsEvents.Schedule.cron({
          minute: "0",
          hour: "1",
          month: "*",
          weekDay: "sun",
          year: "*",
        }),
        targets: [lambdaAwsEventTarget],
      }
    );
  }
}
