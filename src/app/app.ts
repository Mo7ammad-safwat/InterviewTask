import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { Sidebar } from './sidebar/sidebar';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, Sidebar, Home],
  templateUrl: './app.html',

  styleUrls: ['./app.css'],
})
export class App {}
