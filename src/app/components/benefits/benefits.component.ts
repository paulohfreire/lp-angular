import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss',
})
export class BenefitsComponent {
  @Input('img-path') imgPath: string = '';
  @Input('card-title') cardTitle: string = '';
  @Input('card-description') cardDescription: string = '';
}
