import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './gaming.component.html',
  styleUrl: './passion.component.css'
})
export class GamingComponent {}


