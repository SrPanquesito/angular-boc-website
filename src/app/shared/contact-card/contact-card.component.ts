import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

interface Service {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  services: Service[] = [
    {value: 'aesthetic', viewValue: 'Aesthetic Dentistry'},
    {value: 'veneers', viewValue: 'Veneers'},
    {value: 'zirconia', viewValue: 'Zirconia Crowns'},
    {value: 'allon4', viewValue: 'All on 4 / All on X'},
    {value: 'dental-implants', viewValue: 'Dental Implants'},
    {value: 'root-canal', viewValue: 'Root Canal Treatment'},
    {value: 'sedation', viewValue: 'Sedation'},
    {value: 'orofacial', viewValue: 'Orofacial Armonization'}
  ];

  constructor(private _formBuilder: FormBuilder) {
  }

  // convenience getter for easy access to form fields
  get f3() { return this.thirdFormGroup.controls; }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      selectedService: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      selectedDate: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', Validators.required]
    });
  }

  onClickUpload() {
    console.log(JSON.stringify(this.firstFormGroup.value));
    console.log(JSON.stringify(this.secondFormGroup.value));
    console.log(this.firstFormGroup.controls['selectedService'].value);
  }

  log3() {
    console.log(this.thirdFormGroup.controls.email);
  }

}
