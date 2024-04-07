import { Component,OnInit} from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {FormGroup,FormArray , FormControl} from '@angular/forms';
@Component({
  selector: 'app-pack-slot',
  templateUrl: './pack-slot.component.html',
  styleUrl: './pack-slot.component.css'
})
export class PackSlotComponent implements OnInit{

  matiereForm : FormGroup = new FormGroup({
    matiereList : new FormArray([])
  });
  constructor(){}
  ngOnInit(): void {
    this.addSubject();
  }
  getMatiereFields() : FormGroup {
    return new FormGroup({
      matiere : new FormControl('')
    });
  }
  matiereListArray(){
    return this.matiereForm.get ('matiereList') as FormArray;
  }
  addSubject(){
    this.matiereListArray().push(this.getMatiereFields());
  }
  removeSubject(i:number)
  {
    this.matiereListArray().removeAt(i);
  }
  @Input() packName:string | undefined;
  @Input() niveau:string | undefined;
  @Input() section:string | undefined;
  @Input() matiere: string[] | undefined;
  @Input() prix:string | undefined;

  @Output() data = new EventEmitter();

  public button:string = "btn btn-primary mr-2";
  public bValue:string ="Editer";
  public display:string = "d-none";

  public newSection:string="";
  public newLevel: string="";
  public newPrice:string="";
  public newMatiere:string[] | undefined;


  editSlot(){
    if(this.button == "btn btn-primary mr-2")
    {
      this.button = "btn btn-success mr-2";
      this.bValue = "Sauvegarder";
      this.display="d-block w-100";
    }
    else{
      this.button = "btn btn-primary mr-2";
      this.bValue = "Editer";
      this.display ="d-none";
      let obj = {

      }

      }
  }


  deleteSlot () {
    //To do in the backend
  }

}
