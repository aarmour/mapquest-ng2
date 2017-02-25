import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mb-map>
      <mb-navigation-control></mb-navigation-control>
      <mb-container-control>
        <button md-mini-fab><md-icon>search</md-icon></button>
      </mb-container-control>
    </mb-map>
  `
})
export class HomePageComponent {

}
