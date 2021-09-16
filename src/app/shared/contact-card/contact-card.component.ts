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

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      selectedService: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onClickUpload() {
    console.log(JSON.stringify(this.firstFormGroup.value));
    console.log(this.firstFormGroup.controls['selectedService'].value);
  }

}
