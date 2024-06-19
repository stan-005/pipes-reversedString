import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from '../../pipes/reverse-string.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReverseStringPipe]
})
export class InputFormComponent {
  inputString: string = '';
  reversedString: string = '';

  reverseInput() {
    this.reversedString = this.inputString.split('').reverse().join('');
  }
}
