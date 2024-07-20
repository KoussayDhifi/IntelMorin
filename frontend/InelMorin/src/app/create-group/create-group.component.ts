import { Component } from '@angular/core';
import { FetchEnseignantService } from '../create-enseignant/fetch-enseignant.service';
import { FetchGroupService } from './fetch-group.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent {
  createForm : FormGroup;
  public levels =[];
  public subjects = [];
  public tutors = [];
  public msg = '';
  public id_tut:string = '';
  public nomGroup = '';
  public level : string = '';
  public subject : string = '';
  public tutor : string ='';  
  
  constructor (private fens:FetchEnseignantService, private fgroup: FetchGroupService,private fb :FormBuilder) {
    this.createForm = this.fb.group({
      tutor:'',
      subject:'',
      level:'',
      nomGroup:''
    });
  }

  ngOnInit () {
    this.getTutors();
  }

  setidTut (x:any) {
    this.id_tut = x.value;
    console.log(this.id_tut);
  }

  getTutors() {
    this.fens.consultEnseignant().subscribe (
      (data:any) => {
        this.tutors = data;
        console.log(data);
      }, (err:any) => {
        console.error(err);
      }
    )
  }

  createGroup () {
    let obj = {
      id_tut:this.createForm.value.tutor,
      subject:this.createForm.value.subject,
      level:this.createForm.value.level,
      nomGroup:this.createForm.value.nomGroup
    }
    console.log(obj);

    this.fgroup.insertGroup(obj).subscribe (
      (data:any) => {
        this.msg = data.msg;
      }, (err:any) => {
        console.error(err);
      }
    )

  }




}
