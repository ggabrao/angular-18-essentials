import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pressed = '';
  released = '';

  onKeyup(event: KeyboardEvent): void {
    setTimeout(this.released = event.key, 1000);
  }

  onKeydown(event: KeyboardEvent): void {
    setTimeout(() => this.pressed = event.key, 1000);
  }



}
