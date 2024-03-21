import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-packs',
  templateUrl: './consult-packs.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./consult-packs.component.css']
})
export class ConsultPacksComponent {
  public display1:string ="display:none";
  public display2:string ="display:none";
  public display3:string ="display:none";
  public display4:string ="display:none";
  public Price: any;
  toggleItems1 () {
    (this.display1 == "display:none")? this.display1="display:block;" : this.display1="display:none";

  }
  toggleItems2 () {
    (this.display2== "display:none")? this.display2="display:block;" : this.display2="display:none";

  }
  toggleItems3() {
    (this.display3 == "display:none")? this.display3="display:block;" : this.display3="display:none";

  }
  toggleItems4() {
    (this.display4 == "display:none")? this.display4="display:block;" : this.display4="display:none";

  }
}
