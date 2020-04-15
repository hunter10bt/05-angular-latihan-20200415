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
    this.pattern = ""

    if(this.result % 2 == 0){
      this.pattern = this.pattern.concat("Pola B\n");
      var start = this.power;

      for (var line = start; line <= this.result; line++){
        for (var char = 0; char < line; char++){
          this.pattern = this.pattern.concat("*");
        }
        this.pattern = this.pattern.concat("A");
      }
    }
    else {
      this.pattern = this.pattern.concat("Pola A\n");
      var start = this.power;
      var lim2 = 0;

      for (var line = start; line > 0; line--){
        for (var char = line; char > 0; char--){
          this.pattern = this.pattern.concat("*");
        }
        if(lim2 < this.base){
          for (var char = 0; char <= lim2; char++){
            this.pattern = this.pattern.concat("o")
          }
        }
        lim2++;
        this.pattern = this.pattern.concat("A");
      }
    }
  }
}
