import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-bot-df';

  responses = [];

  constructor(private _call: HttpClient) {}


  sendQuery(query) {

    /**
     * 
     * Add your own token in the headers
     * 
     */
    const headers = new HttpHeaders({
      "content-type": "application/json; charset=utf-8", 
      "Authorization": "Bearer ya29.a0AfH6SMD7EnIs1E9m0mVOngYT-0pPpx52aODEkzZnySg5XDx88AoTfLEktXy76a-WQh8YcUXeEDIjGOjTOL-QYR3flM7KxPFM8y1XEw4mXVfy2ogi-URocP-yEh2QFqqkuvJCuR-vwE5a1KVLrzHYiOZa1P0RGF56tPBBecFz6ZS_ocpREg6VrW4Bn5o7kBe0JnVIGQk9DZBbHMZgVPezD7XCD6uB0HFmwFXFBsbaSmT5KQ"
    })
    const body = {
      "queryInput": {
          "text": {
              "text": query,
              "languageCode": "en"
          }
      },
      "queryParams": {
          "source": "DIALOGFLOW_CONSOLE",
          "timeZone": "Asia/Calcutta",
          "sentimentAnalysisRequestConfig": {
              "analyzeQueryTextSentiment": true
          }
      }
  }
    this._call.post("https://dialogflow.clients6.google.com/v2/projects/pollaris-ovbu/agent/sessions/90cb27cd-70eb-df2c-48ff-d503fa4e2596:detectIntent", body, { headers })
    .subscribe((res: any) => {
      this.responses.push(res.queryResult.fulfillmentText);
    })
  }


}
