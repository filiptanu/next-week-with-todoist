# Next Week with Todoist

Todoist is the tool that I use for organizing my life.

Todoist has many options for creating recurring tasks. However, I do not like some of the ways Todoist handles the recurring tasks. I created this script to have a fine-grained control over what tasks should get created, in which project, under which section, with or without comments attached to them etc.

## Dependencies

Have TypeScript and ts-node installed globally:

```
npm install -g typescript
npm install -g ts-node
```

If you want to be able to deploy the script to AWS, you need to have AWS CDK installed:

```
npm install -g aws-cdk
```

Install the project dependencies by running:

```
cd app
npm install
```

After that, you are good to go to run the script.

## Setting up the tasks in a json file

Rename the `app/example.tasks.json` to `app/tasks.json`.

Add all the tasks you want to add to Todoist (see the two example tasks already contained in the document). Make sure to replace the placeholders `<your-project-id-here>` and `<your-section-id-here>` with the appropriate ids from your Todoist account.

## Running the Script

The ultimate intention of this script is to be run automatically as a AWS Lambda function. However, until set up properly, I will run it weekly, every sunday.

```
cd app
ts-node src/index.ts
```

## Deployment on AWS

In the `infrastructure` folder, you can find code that will set up the necessary infrastructure on AWS, so the script would be run automatically once per week, on Sunday.

To deploy the code on AWS:

```
cd infrastructure
cdk deploy
```
