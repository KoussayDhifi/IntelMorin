import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tutor-info',
  templateUrl: './tutor-info.component.html',
  styleUrl: './tutor-info.component.css'
})
export class TutorInfoComponent {
  @Input() cin:any | undefined;
  @Input() name:string | undefined;
  @Input() lname:string | undefined;
  @Input() pnumber:string | undefined
  @Input() lycee:string | undefined

}
