import { Component, Input } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrl: './level-list.component.css'
})
export class LevelListComponent {
  @Input() level:string = "2eme math";
  @Input() paidStudents:any = [];
  @Input() unpaidStudents:any = [];

  
  public expand:boolean | undefined

  public toggleShow () {
    if (this.expand == undefined) {
      this.expand = false;
    }
    this.expand = !this.expand;
  }


}
