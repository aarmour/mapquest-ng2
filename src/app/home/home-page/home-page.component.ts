import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { replace } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../state';
import * as fromRoot from '../../state/reducers';
import * as fromMap from '../../state/home/map/actions';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mq-side-panel-container>
      <mq-side-panel [opened]="showSidePanel$ | async">
        <router-outlet></router-outlet>
      </mq-side-panel>

      <mb-map (moveend)="onMapMoveend($event)" [center]="mapCenter$ | async" [zoom]="mapZoom$ | async">
        <mb-navigation-control></mb-navigation-control>
        <mb-container-control>
          <mq-fab-input icon="search" (submit)="search($event)"></mq-fab-input>
        </mb-container-control>
      </mb-map>
    </mq-side-panel-container>
  `,
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {

  mapCenter$: Observable<Object>;
  mapZoom$: Observable<number>;
  showSidePanel$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.mapCenter$ = this.store.select(fromRoot.getHomeMapCenter);
    this.mapZoom$ = this.store.select(fromRoot.getHomeMapZoom);
    this.showSidePanel$ = this.store.select(fromRoot.getHomeShowSidenav);
  }

  onMapMoveend($event: any) {
    console.log('onMapMoveend:', $event.target.getCenter(), $event.target.getZoom());
    const center = $event.target.getCenter();
    const zoom = $event.target.getZoom();
    this.store.dispatch(new fromMap.SetExtentAction({ center, zoom }));
  }

  search(query: string) {
    this.store.dispatch(replace(['/search', query]));
  }

}
