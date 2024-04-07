import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-packs',
  templateUrl: './consult-packs.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./consult-packs.component.css']
})
export class ConsultPacksComponent {
  public element:object | undefined;

  getEditedElement($event:object):void {
    this.element = $event;

  }
}
