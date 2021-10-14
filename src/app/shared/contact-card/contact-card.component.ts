import { environment as env } from 'src/environments/environment';

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ContactCardService } from './contact-card.service';

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
  @Input() full: boolean = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  dateMaxHour = "03:00 pm";

  services: Service[] = [
    {value: 'aesthetic', viewValue: 'Aesthetic Dentistry'},
    {value: 'veneers', viewValue: 'Veneers'},
    {value: 'zirconia', viewValue: 'Zirconia Crowns'},
    {value: 'allon4', viewValue: 'All on 4 / All on X'},
    {value: 'dental-implants', viewValue: 'Dental Implants'},
    {value: 'root-canal', viewValue: 'Root Canal Treatment'},
    {value: 'other', viewValue: 'Other...'}
  ];

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private contactCardService: ContactCardService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      selectedService: ['', Validators.required],
      otherService: [''],
      fileUploaded: ['']
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
  get fileUploaded() { return this.firstFormGroup.get('fileUploaded'); }
  get selectedDate() { return this.secondFormGroup.get('selectedDate'); }
  get email() { return this.thirdFormGroup.get('email'); }

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

  // Send file for uploading
  testCors() {
    this.contactCardService.getTest().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  prepareForm() {
    this.sendingForm = true;
    this.sendedForm = true;
    var savedImageUrl; 
    const upload$ = this.contactCardService.postFileUpload(this.fileUploaded.value)
    .pipe(
      finalize(() => {
        this.reset();
        this.sendForm(savedImageUrl);
      })
    );
    this.uploadSub = upload$.subscribe(event => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));
      }
      if (event.type == HttpEventType.Response) {
        console.log(event.body.imageUrl);
        savedImageUrl = event.body.imageUrl;
      }
    })
  }

  // Send rest of the form
  sendForm(imageUrl: string) {
    const mergeForm = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
      imageUrl
    };
    console.log(mergeForm);
    this.contactCardService.postForm(mergeForm).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }



  // Setting file upload section
  fileName = '';
  fileUploadedCompleted = false;
  uploadProgress: number;
  uploadSub: Subscription;
  sendingForm = false;
  sendedForm = false;
  onFileSelected(e) {
    const file:File = e.target.files[0];

    if (file) {
        this.fileName = file.name;
        this.fileUploadedCompleted = true;

        const formData = new FormData();
        formData.append("image", file);
        this.fileUploaded.setValue(formData);
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
    this.sendingForm = false;
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
    this.sendingForm = false;
  }

}
