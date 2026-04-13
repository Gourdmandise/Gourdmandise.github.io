import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
        <p>&copy; 2026 Rayan Saboun. Tous droits réservés.</p>
        <p><a href="mailto:rayan.saboun@gmail.com"><i class="fas fa-envelope"></i> rayan.saboun@gmail.com</a></p>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {}
