import { Component, OnInit, ViewChild } from '@angular/core';
import {StepState} from "@covalent/core";
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  activeDeactiveStep1Msg: string = 'No select/deselect detected yet';
  stateStep2: StepState = StepState.None;
  stateStep3: StepState = StepState.Complete;
  disabled: boolean = false;
  ticker = '';
  storyText = '';

  story: any;

  blockSave: boolean = true;
  state1: StepState = StepState.None;//"none";
  state2: StepState = StepState.None;//"none";
  state3: StepState = StepState.None;//"none";
  @ViewChild('form1') _form1: NgForm;
  @ViewChild('form2') _form2: NgForm;
  @ViewChild('form3') _form3: NgForm;

  constructor(private router: Router) { }

  clearStory() {
    this.story = '';
  }

  submit() {
    this.router.navigate(['/dashboard']);
  }

  update(step, isValid): void {
    switch(step) {
      case 1:
        if(isValid) {
          this.state1 =  StepState.Complete;
        } else {
          this.state1 = StepState.Required;
        }
        break;
      case 2:
        if(isValid) {
          this.state2 =  StepState.Complete;
        } else {
          this.state2 = StepState.Required;
        }
        break;
      case 3:
        if(isValid) {
          this.state3 = StepState.Complete;
          this.blockSave = false;
        } else {
          this.state3 = StepState.Required;
        }
/*        console.log(this.twitter.nativeElement.value);
        if(this.twitter.nativeElement.value != "" || this.linkedin.nativeElement.value != "" ) {
          this.linksSummary = true;
        }*/
    }
  }
  save(data)
  {

  }

  ngOnInit() {
    this.story = {
      symbol: '',
      company: '',
      text: ''
    };
  }
}
