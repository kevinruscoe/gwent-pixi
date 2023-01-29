import { Application, Container, Point, Sprite } from 'pixi.js';
import { Deck } from '../Deck';
import { CardRow } from '../CardRow';

export class HelloWorld extends Container {
    app: Application;
    deck: Deck;
    rows: CardRow[];

    constructor(app: Application) {
        super();
        this.app = app;
        this.update = this.update.bind(this);

        this.rows = [
            new CardRow("Meele"), 
            new CardRow("Ranged"),
            new CardRow("Seige")
        ];

        this.deck = new Deck;
        this.deck.generate(this.app);

        this.rows[0].addCard(this.deck.cards[0]);

        app.ticker.add(this.update);
    }

    update(_: any, delta: number) {
        this.rows.forEach(row => {
            console.log(row.name + ":" + row.value());
        });
    }
}
