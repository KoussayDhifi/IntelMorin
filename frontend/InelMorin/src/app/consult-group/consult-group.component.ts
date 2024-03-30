import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-consult-group',
  templateUrl: './consult-group.component.html',
  styleUrl: './consult-group.component.css'
})
export class ConsultGroupComponent {
  public Nom :string=""; 
  public Prenom :string="";
  public Num : number=0 ; 
  public element:object | undefined;

  @Output() data = new EventEmitter();

  public button:string = "btn btn-primary mr-2";
  public bValue:string = "Editer"
  public display:string = "d-none"; 


  editSlot() {
    if (this.button == "btn btn-primary mr-2") {
      this.button = "btn btn-success mr-2";
      this.bValue = "Sauvegarder";
      this.display = "d-block w-100";
    }else {
      this.button = "btn btn-primary mr-2";
      this.bValue = "Editer";
      this.display = "d-none";
      let obj = {
        
      }
      console.log(obj);
    }
  }
  getEditedElement($event:object):void {
    this.element = $event;
    
  }
}
