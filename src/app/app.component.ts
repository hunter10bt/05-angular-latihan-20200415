import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'User';
  base = 0;
  power = 0;
  result = 0;
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
    this.result = 1;
    var iter = 0;

    for (iter = 0; iter < this.power; iter++){
      this.result = this.result * this.base;
    }

    console.log(this.result);
  }
}
