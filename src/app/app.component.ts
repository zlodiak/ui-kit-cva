import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    salary: new FormControl('100'),
    age: new FormControl('21', [Validators.required]),
  });

  submit() {
    console.log(this.form);
  }

}
