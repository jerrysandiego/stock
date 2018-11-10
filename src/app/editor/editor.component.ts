import { Component, OnInit } from '@angular/core';
import {StepState} from "@covalent/core";
import {Router} from "@angular/router";

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
  story = '';

  constructor(private router: Router) { }

  toggleRequiredStep2(): void {
    this.stateStep2 = (this.stateStep2 === StepState.Required ? StepState.None : StepState.Required);
  }

  toggleCompleteStep3(): void {
    this.stateStep3 = (this.stateStep3 === StepState.Complete ? StepState.None : StepState.Complete);
  }

  activeStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Active event emitted.';
  }

  deactiveStep1Event(): void {
    this.activeDeactiveStep1Msg = 'Deactive event emitted.';
  }

  clearStory() {
    this.story = '';
  }

  submit() {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
