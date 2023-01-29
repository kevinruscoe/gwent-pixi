import { Container } from "pixi.js";
import { Card } from "./Card";

export class CardRow extends Container {
    name: string;
    cards: Card[] = [];
    frozen: boolean = false;

    constructor(name: string) {
        super();
        this.name = name;
        this.height = window.innerHeight/3;
        this.width = window.innerWidth;
    }

    addCard(card: Card) {
        card.height = 100;
        this.cards.push(card);

        this.addChild(card);
    }

    value() {
        if (this.frozen) {
            return this.cards.length;
        }

        return this.cards.reduce((partialSum, card) => partialSum + card.value, 0);
    }
}