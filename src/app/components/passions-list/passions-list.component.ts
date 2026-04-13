import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passions',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <a routerLink="/" class="back-btn">
        <i class="fas fa-arrow-left"></i> Retour
    </a>

    <!-- Origami -->
    <div class="section">
        <h2><i class="fas fa-paper-plane"></i> Origami</h2>
        <p>
            J'aime l'origami car, avec un simple bout de papier, on peut faire énormément de choses,
            et on n'est limité que par notre motivation à progresser. J'ai commencé à en faire en 2015,
            et au fil du temps c'est devenu une sorte de petite bulle de calme pour moi.
        </p>
        <a routerLink="/origami" class="read-more">
            <i class="fas fa-arrow-right"></i> En savoir plus
        </a>
    </div>

    <!-- Tennis de Table -->
    <div class="section">
        <h2><i class="fas fa-table-tennis-paddle-ball"></i> Tennis de Table</h2>
        <p>
            Je joue au tennis de table depuis plusieurs années dans mon club à Mondonville,
            où j'ai atteint un niveau intermédiaire, et ce sport me passionne parce qu'il mélange
            vitesse, stratégie, précision et surtout le plaisir constant de progresser.
        </p>
        <a routerLink="/tennis" class="read-more">
            <i class="fas fa-arrow-right"></i> En savoir plus
        </a>
    </div>

    <!-- Jeux Vidéo -->
    <div class="section">
        <h2><i class="fas fa-gamepad"></i> Jeux Vidéo</h2>
        <p>
            Je suis passionné par les jeux vidéo depuis mon enfance, que ce soit sur PC,
            consoles ou mobile, car j'adore explorer des univers variés et relever des défis.
            Ce que j'aime le plus dans le gaming, c'est la créativité des mondes et les mécaniques de jeu.
        </p>
        <a routerLink="/gaming" class="read-more">
            <i class="fas fa-arrow-right"></i> En savoir plus
        </a>
    </div>

    <!-- Manhwa -->
    <div class="section">
        <h2><i class="fas fa-book-open"></i> Manhwa</h2>
        <p>
            J'ai commencé à m'intéresser au manga en 2019, en tombant au hasard sur les sites
            de mangas-origine et Phenix scan. Ce que j'aime dedans c'est principalement la diversité des œuvres.
            Les genres que je préfère sont les action, isekai, comédie...
        </p>
        <a routerLink="/manhwa" class="read-more">
            <i class="fas fa-arrow-right"></i> En savoir plus
        </a>
    </div>
  `,
  styleUrl: './passions-list.component.css'
})
export class PassionsListComponent {}
