import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mq-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mb-map>
      <mb-navigation-control></mb-navigation-control>
      <mb-container-control>
        <mq-fab-input icon="search"></mq-fab-input>
      </mb-container-control>
    </mb-map>
  `
})
export class HomePageComponent {

}
