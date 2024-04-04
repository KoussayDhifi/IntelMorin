import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-eleves',
  templateUrl: './create-eleves.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./create-eleves.component.css']
})
export class CreateElevesComponent implements OnInit {
  nom: string = '';
  prenom: string = '';
  DateNE: any = '';
  TelephoneE: any = '';
  TelephoneP: any = '';
  MailE: any = '';
  Password: any = '';
  NomLy: string = '';
  Section: string = '';
  Niveau: string = '';

  studentForm: FormGroup = new FormGroup({
    studentList: new FormArray([])
  });

  constructor() {}

  ngOnInit(): void {
    this.addStudent(); // Add an initial student field when the component initializes
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
    console.log(this.studentForm.value);
  }
}
