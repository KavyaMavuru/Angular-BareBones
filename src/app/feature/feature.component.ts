import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'feature',
    templateUrl: './feature.component.html'
})
export class FeatureComponent implements OnInit {
    form: any;
  powers: string[];
  submitted: boolean = false;

    constructor() { }

    ngOnInit() { 
        this.powers = ['Really Smart', 'Turbulent Breeze', 
        'Super Hot', 'Weather Changer'];

    }

    onSubmit(form: any)  {
        this.submitted = true;
        this.form = form;
      }

}