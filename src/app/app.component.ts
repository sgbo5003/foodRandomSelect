import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'randomLunchSelect';

  // public Form: FormGroup;

  public randomDataArr: any[] = []; // 랜덤 data items
  public randomData: string = "";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.Form = this.fb.group({
    //   randomData: new FormControl("")
    // });

    // this.Form.get("randomData")?.setValue("?");
    this.randomData = "?";

    this.randomDataArr = [{value: 1, label: "쭈왕"}, {value: 2, label:"얌샘김밥"}, {value: 3, label:"육수당"}, 
                       {value: 4, label:"민속돌솥설렁탕"}, {value: 5, label:"호현돈까스"}, {value: 6, label:"경춘루"},
                       {value: 7, label:"부부돈까스"}, {value: 8, label:"일품양평해장국"}, {value: 9, label:"이타제면소"},
                       {value: 10, label:"마마된장"}];
  }

  submit() {
    let randomSelected = Math.floor(Math.random() * (this.randomDataArr.length - 1));
    for(let i = 0; i < this.randomDataArr.length; i++) {
      if(randomSelected === this.randomDataArr[i].value) {
        // return console.log(this.randomDataArr[i].label);
        return this.randomData = this.randomDataArr[i].label;
      }
    }
  }

}
