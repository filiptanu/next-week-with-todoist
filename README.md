# Todoist Next Week

Todoist is the tool that I use for organizing my life.

Todoist has many options for creating recurring tasts, however, I created this script to have a fine-grained control over what tasks should get created, in which project, under which section, with or without comments attached to them etc.

## Dependencies

Have TypeScript and ts-node installed globally:

```
npm install -g typescript
npm install -g ts-node
```

Install the project dependencies by running:

```
npm install
```

After that, you are good to go to run the script.

## Setting up the tasks in a json file

Rename the `example.tasks.json` to `tasks.json`.

Add all the tasks you want to add to Todoist (see the two example tasks already contained in the document). Make sure to replace the placeholders `<your-project-id-here>` and `<your-section-id-here>` with the appropriate ids from your Todoist account.

## Running the Script

The ultimate intention of this script is to be run automatically as a AWS Lambda function. However, until set up properly, I will run it weekly, every sunday.

```
ts-node src/index.ts
```

## References to Use During Development

- https://developer.todoist.com/rest/v1/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://medium.com/@isachenx/making-a-fetch-request-with-typescript-4a6b523f1e69
- https://scotch.io/@nwayve/how-to-build-a-lambda-function-in-typescript
