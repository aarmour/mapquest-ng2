import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MapquestModule } from '../mapquest.module';
import { MapquestSearchService } from './search.service';

describe('Service: MapquestSearch', () => {
  let service: MapquestSearchService = null;
  let backend: MockBackend = null;

  let key = 42;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MapquestModule.forRoot(key)
      ],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [
            MockBackend,
            BaseRequestOptions
          ]
        },
        MapquestSearchService
      ]
    })
  });

  beforeEach(inject([MapquestSearchService, MockBackend], (mapquestSearchService: MapquestSearchService, mockBackend: MockBackend) => {
    service = mapquestSearchService;
    backend = mockBackend;
  }));

  let boundingBox = [40.099998, -77.305603, 39.099998, -75.305603];
  let searchResults = { results: [] };

  it('should call the search by rectangle api and return the search results', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(searchResults)
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(`https://www.mapquestapi.com/search/v2/rectangle?key=${key}&boundingBox=${boundingBox.join(',')}`);
    });

    service
      .rectangle({ boundingBox })
      .subscribe((res) => {
        expect(res).toEqual(searchResults);
        done();
      });
  });
});
