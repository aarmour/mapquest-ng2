import 'rxjs/add/operator/map';
import { Inject, Injectable } from '@angular/core';
import { Http, Request, RequestMethod, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { SearchAheadPredictionResults } from '../models/search-ahead';

export interface SearchAheadPredictionParams {
  q: string;
  collection: string[];
  limit?: number;
  location?: number[];
}

@Injectable()
export class MapquestSearchAheadService {

  private API_PATH = 'http://www.mapquestapi.com/search/v3';

  constructor(@Inject('MAPQUEST_KEY') private key, private http: Http) { }

  prediction(params: SearchAheadPredictionParams) {
    const search: URLSearchParams = new URLSearchParams();

    search.set('key', this.key);

    for (let prop in params) {
      search.set(prop, params[prop]);
    }

    const request: Request = new Request({
      url: `${this.API_PATH}/prediction`,
      method: RequestMethod.Get,
      params: search
    });

    return this.http.request(request)
      .map(json);
  }

}

function json(res: any) {
  return res.json();
}
