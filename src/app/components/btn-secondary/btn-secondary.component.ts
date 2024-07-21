import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-secondary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-secondary.component.html',
  styleUrl: './btn-secondary.component.scss',
})
export class BtnSecondaryComponent {
  @Input('btn-text') btnText: string = '';
  @Input() targetSection!: string;
  @Input() label!: string;

  scrollToSection() {
    const element = document.querySelector(this.targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
