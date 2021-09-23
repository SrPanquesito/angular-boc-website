import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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
  dateMaxHour = "05:00 pm";

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
      selectedDate: ['', Validators.required],
      selectedTime: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get selectedService() { return this.firstFormGroup.get('selectedService'); }
  get selectedDate() { return this.secondFormGroup.get('selectedDate'); }
  get email() { return this.thirdFormGroup.get('email'); }

  // convenience getter for easy access to form fields
  get f3() { return this.thirdFormGroup.controls; }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  filterSundays = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Sunday from being selected.
    return day !== 0;
  }

  adjustTime(e: MatDatepickerInputEvent<Date>) {
    console.log(e.value);
    const day = (e.value).getDay();
    day === 6 ? this.dateMaxHour = "03:00 pm" : this.dateMaxHour = "05:00 pm";
  }

  onClickUpload() {
    console.log(JSON.stringify(this.firstFormGroup.value));
    console.log(JSON.stringify(this.secondFormGroup.value));
    console.log(this.firstFormGroup.controls['selectedService'].value);
  }

}
