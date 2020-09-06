import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-switch',
  templateUrl: './theme-toggle-switch.component.html',
  styleUrls: ['./theme-toggle-switch.component.scss']
})
export class ThemeToggleSwitchComponent implements OnInit {

  darkMode = false;

  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
    }

    // listen to color scheme change
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        if (event.matches) {
          console.log('dark!');
          this.darkMode = true;
        } else {
          console.log('light!');
          this.darkMode = false;
        }
      })
  }

}
