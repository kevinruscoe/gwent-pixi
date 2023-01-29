import { Application } from "pixi.js";
import { Card } from "./card";

export class Deck {
    cards: Card[] = [];

    generate(app: Application, amount: number = 25): void {
        for (let index = 0; index < amount; index++) {
            this.cards.push(
                new Card(
                    app.loader.resources['assets/hello-world.png'].texture,
                    Math.floor(Math.random() * (10 - 1 + 1) + 1)
                )
            );
        }
    }
}