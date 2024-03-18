import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-emploi',
  templateUrl: './consult-emploi.component.html',
  styleUrl: './consult-emploi.component.css'
})
export class ConsultEmploiComponent {

  public element:object | undefined;

  getEditedElement($event:object):void {
    this.element = $event;
    
  }
}
