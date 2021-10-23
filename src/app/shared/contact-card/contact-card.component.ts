import { environment as env } from 'src/environments/environment';

import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Subscription } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';
import { ContactCardService } from './contact-card.service';
import { ReCaptchaService } from 'angular-recaptcha3';

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
  errMessage: string;

  services: Service[] = [
    {value: 'aesthetic', viewValue: 'Aesthetic Dentistry'},
    {value: 'veneers', viewValue: 'Veneers'},
    {value: 'zirconia', viewValue: 'Zirconia Crowns'},
    {value: 'allon4', viewValue: 'All on 4 / All on X'},
    {value: 'dental-implants', viewValue: 'Dental Implants'},
    {value: 'root-canal', viewValue: 'Root Canal Treatment'},
    {value: 'other', viewValue: 'Other...'}
  ];

  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private contactCardService: ContactCardService, private recaptchaService:ReCaptchaService) { }

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
  get otherService() { return this.firstFormGroup.get('otherService'); }
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
  prepareForm() {
    this.sendingForm = true;
    this.sendedForm = true;
    var savedImageUrl; 


    this.recaptchaService.execute({action: 'contactForm'}).then(token => {
      // Backend verification method
      this.contactCardService.postVerifyReCaptcha({token}).subscribe(
        res => {
          if (res.message.score >= 0.6 && res.message.success && res.message.action === "contactForm") {
            // Usuario paso reCaptcha => Sigue con file upload
            if (this.fileUploaded.value !== (undefined || null || "")) {
              const upload$ = this.contactCardService.postFileUpload(this.fileUploaded.value)
              .pipe(
                finalize(() => {
                  // Se completo la subida de archivo => Sigue con enviar el email
                  this.reset();
                  this.sendForm(savedImageUrl);
                })
              );
              this.uploadSub = upload$.subscribe(event => {
                if (event.type == HttpEventType.UploadProgress) {
                  this.uploadProgress = Math.round(100 * (event.loaded / event.total));
                }
                if (event.type == HttpEventType.Response) {
                  savedImageUrl = event.body.imageUrl;
                }
              },
              err => {
                this.reset();
                this.sendedForm = false;
                this.errMessage = err.error.message;
              })
            }
            else {
              this.sendForm("");
            }
          }
          else {
            this.sendedForm = false;
            this.errMessage = 'reCaptcha score less than 0.6. If not a bot please contact Baja Oral Center.';
          }
        },
        err => {
          console.log(err);
          this.sendedForm = false;
          this.errMessage = 'reCaptcha connection with backend failed.';
        }
      );
    });
    return;
    
  }

  // Send rest of the form
  sendForm(imageUrl: string) {
    delete this.firstFormGroup.value.fileUploaded;
    const mergeForm = {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
      imageUrl
    };
    this.contactCardService.postSendEmail(mergeForm).subscribe(
      data => console.log('Form sent!'),
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
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
    this.sendingForm = false;
  }

}
