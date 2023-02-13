import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/Personaje';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() character!: Character;

  // @Input() personaje: Personaje | undefined;
}
