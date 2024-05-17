import { Component } from '@angular/core';
import { FetchEnseignantService } from '../create-enseignant/fetch-enseignant.service';
import { FetchGroupService } from './fetch-group.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.css'
})
export class CreateGroupComponent {

  public tutors = [];
  public msg = '';
  public id_tut:string = '';
  public nomGroup = '';
  
  constructor (private fens:FetchEnseignantService, private fgroup: FetchGroupService) {}

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
      id_tut:this.id_tut,
      group:this.nomGroup
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
