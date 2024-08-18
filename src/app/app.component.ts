import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isOn = false;

  switch() {
    this.isOn = !this.isOn;
  }

  family = [
    { position: 'Father', name: 'Bob' },
    { position: 'Mother', name: 'Marie' },
    { position: 'Son', name: 'Tom' }
  ]

}
