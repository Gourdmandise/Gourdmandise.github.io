import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
        <h1> Rayan Saboun</h1>
        <p class="subtitle">Étudiant en BUT Informatique - IUT de Blagnac</p>
        <div class="status-badge">
            <span class="status-dot"></span>
            En stage chez X3COM
        </div>
    </header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
