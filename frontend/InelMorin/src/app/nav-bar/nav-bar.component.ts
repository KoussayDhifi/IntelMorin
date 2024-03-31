import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css','./nav-bar.component.css']
})
export class NavBarComponent {
  public display:string = "display:none";

  public display1:string = "display:none";
  public display2:string ="display:none";
  public display3:string ="display:none";
  public display4:string ="display:none";
  public display5:string ="display:none";

  toggleItems () {
    (this.display == "display:none")? this.display="display:block;" : this.display="display:none";

  }
  toggleItems1 () {
    (this.display1 == "display:none")? this.display1="display:block;" : this.display1="display:none";

  }
  toggleItems2(){
    (this.display2 == "display:none") ? this.display2 ="display:block;" : this.display2="display:none";
  }

  toggleItems3() {
    (this.display3 == "display:none")? this.display3="display:block;" : this.display3="display:none";
  }
  toggleItems4() {
    (this.display4 == "display:none")? this.display4="display:block;" : this.display4="display:none";
  }
  toggleItems5() {
    (this.display5 == "display:none")? this.display5="display:block;" : this.display5="display:none";
  }


}
