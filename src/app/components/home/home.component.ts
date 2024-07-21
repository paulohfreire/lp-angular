import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormComponent } from '../form/form.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    FormComponent,
    BenefitsComponent,
    FooterComponent,
  ],
})
export class HomeComponent {}
