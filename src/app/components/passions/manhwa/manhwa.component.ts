import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manhwa',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './manhwa.component.html',
  styleUrl: './passion.component.css'
})
export class ManhwaComponent {}


