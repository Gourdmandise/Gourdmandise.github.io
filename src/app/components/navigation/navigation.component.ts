import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-btn">
            <i class="fas fa-home"></i> Accueil
        </a>
        <a routerLink="/passions" routerLinkActive="active" class="nav-btn">
            <i class="fas fa-heart"></i> Passions
        </a>
        <a routerLink="/informations" routerLinkActive="active" class="nav-btn">
            <i class="fas fa-info-circle"></i> Informations
        </a>
    </nav>
  `,
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {}

