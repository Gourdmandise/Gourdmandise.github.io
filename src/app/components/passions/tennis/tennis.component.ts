import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tennis',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tennis.component.html',
  styleUrl: './passion.component.css'
})
export class TennisComponent {}


