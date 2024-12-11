import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../../src/models/game';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;

  constructor() {}


    ngOnInit(): void {
      this.newGame();
    }

  newGame() {
    this.game = new Game();
    console.log(this.game);
    
  }


  takeCard() {
    if (!this.pickCardAnimation) {      
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log(this.currentCard);  
      console.log(this.game);
      
      setTimeout(() => {
        if (this.currentCard !== undefined) {
          this.game.playedCards.push(this.currentCard);
        }
        this.pickCardAnimation = false;
      }, 1250);
    }
  }

}
