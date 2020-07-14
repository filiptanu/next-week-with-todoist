import fetch from "node-fetch";

export class RequestService {
  post(path: string, body: any): Promise<any> {
    return fetch(`https://api.todoist.com/rest/v1/${path}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.API_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
