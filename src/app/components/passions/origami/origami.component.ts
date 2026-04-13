import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-origami',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './origami.component.html',
  styleUrl: './passion.component.css'
})
export class OrigamiComponent {}


