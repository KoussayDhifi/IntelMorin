import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FetchEnseignantService } from '../create-enseignant/fetch-enseignant.service';
import { FetchGroupService } from '../create-group/fetch-group.service';
import { CreateStudentService } from './create-student.service';

@Component({
  selector: 'app-create-eleves',
  templateUrl: './create-eleves.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./create-eleves.component.css']
})
export class CreateElevesComponent implements OnInit {
  public nom: string = '';
  public prenom: string = '';
  public DateNE: any = '';
  public TelephoneE: any = '';
  public TelephoneP: any = '';


  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([])
  });

  tutors:any[] = []
  groups:any[] = []
  
  constructor(private fens:FetchEnseignantService, private fgroup:FetchGroupService, private fstud:CreateStudentService) {}

  ngOnInit(): void {
    this.addStudent(); // Add an initial student field when the component initializes
    this.getTutors();
    this.getGroups();
  }


  getGroups() {
    this.fgroup.selectGroup().subscribe(
      (data:any) => {
        this.groups = data;
      }, (err:any) => {
        console.error(err);

      }
    )
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

  getStudentFields(): FormGroup {
    return new FormGroup({
      Groupes: new FormControl(''),
      Prof: new FormControl(''),
      Mois: new FormControl(''),
      Prix: new FormControl('')
    });
  }

  studentListArray() {
    return this.studentForm.get('studentList') as FormArray;
  }

  addStudent() {
    this.studentListArray().push(this.getStudentFields());
  }

  removeStudent(i: number) {
    this.studentListArray().removeAt(i);
  }
  
  onSubmit() {
    let obj  = {
      nom: this.nom,
      prenom:this.prenom,
      date:this.DateNE,
      tel:this.TelephoneE,
      telp:this.TelephoneP, 
      tutors:this.studentListArray

    }

    this.fstud.insertStudent(obj).subscribe (
      (data:any) => {
        console.log(data);
      },
      (err:any) => {
        console.error(err);
      }
    )
  }
}
