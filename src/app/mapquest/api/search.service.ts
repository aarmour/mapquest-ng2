import 'rxjs/add/operator/map'
import { Inject, Injectable } from '@angular/core';
import { Http, Request, RequestMethod, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { SearchResults } from '../models/search';

export interface SearchParams {
  maxMatches?: number
}

export interface SearchRectangleParams extends SearchParams {
  boundingBox: number[]
}

@Injectable()
export class MapquestSearchService {

  private API_PATH: string = 'https://www.mapquestapi.com/search/v2';

  constructor(@Inject('MAPQUEST_KEY') private key, private http: Http) { }

  rectangle(params: SearchRectangleParams): Observable<SearchResults> {
    const search: URLSearchParams = new URLSearchParams();

    search.set('key', this.key);

    for (let prop in params) {
      search.set(prop, params[prop]);
    }

    const request: Request = new Request({
      url: `${this.API_PATH}/rectangle`,
      method: RequestMethod.Get,
      search
    });

    return this.http.request(request)
      .map(json);
  }

}

function json(res: any) {
  return res.json();
}
