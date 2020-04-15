import { Component, enableProdMode } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'User';
  base = 0;
  power = 0;
  result = 1;
  pattern = "";

  setbase(event:any){
    this.base = event.target.value;
    this.calculate();
  }

  setpower(event:any){
    this.power = event.target.value;
    this.calculate();
  }

  calculate(){
    this.result = Math.pow(this.base, this.power);
  }
}
