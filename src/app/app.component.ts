import {Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterOutlet, LoginComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e_lproject';
}
