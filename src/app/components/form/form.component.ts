import { NewsletterService } from './../../services/newsletter.service';
import { Component, signal, Signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  appForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.appForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    // console.log(this.appForm.value);
    this.loading.set(true);
    if (this.appForm.valid) {
      this.service
        .sendData(this.appForm.value.name, this.appForm.value.email)
        .subscribe({
          next: () => {
            this.appForm.reset();
            this.loading.set(true);
          },
        });
    }
  }
}
