import { Container } from "pixi.js";
import { Card } from "./card";

export class CardRow extends Container {
    name: string;
    cards: Card[] = [];
    frozen: boolean = false;

    constructor(name: string) {
        super();
        this.name = name;
    }

    addCard(card: Card) {
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