import { Component } from "@angular/core";
import { Form, FormArray,FormControl,FormGroup, FormGroupName } from "@angular/forms";
@Component({
  selector: 'app-create-packs',
  templateUrl: './create-packs.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./create-packs.component.css']
})
export class CreatePacksComponent {
  packForm : FormGroup = new FormGroup({
    packList : new FormArray([])
  });


  getPackFields(): FormGroup{
    return new FormGroup({
        section : new FormControl(''),
        niveau : new FormControl(''),
        prix : new FormControl(''),
        matieresPack : new FormGroup({
          matierePackArray : new FormArray([this.putNewSubject()])
        })
    });
  }
  packListArray(){
    return this.packForm.get('packList') as FormArray;
  }
  addPack(){
    this.packListArray().push(this.getPackFields());
    }
  removePack(i : number)
  {
    this.packListArray().removeAt(i);
  }
  getFormData(){
    console.log(this.packForm.value);
  }

  matiereFormGroup(i : number){
    return this.packListArray().at(i).get('matieresPack') as FormGroup;
  }

  matieresArray(i : number)
  {
    return this.matiereFormGroup(i).get('matierePackArray') as FormArray;
  }

  putNewSubject(){
    return new FormGroup({
      matiere : new FormControl('')
    })
  }
  addSubject(i:number)
{
  this.matieresArray(i).push(this.putNewSubject());
}

removeSubject(i : number , j : number)
{
  this.matieresArray(i).removeAt(j);
}
}
