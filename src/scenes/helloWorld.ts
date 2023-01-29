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

        this.rows = [];

        var meeleRow = new CardRow("Meele");
        meeleRow.y = 0;
        this.rows.push(meeleRow);
        
        var rangedRow = new CardRow("Ranged");
        rangedRow.y = window.innerHeight/3 * 1;
        this.rows.push(rangedRow);

        var seigeRow = new CardRow("Seige");
        seigeRow.y = window.innerHeight/3 * 2;
        this.rows.push(seigeRow);

        this.deck = new Deck;
        this.deck.generate(this.app);

        this.rows[0].addCard(this.deck.cards[0]);
        this.rows[1].addCard(this.deck.cards[1]);
        this.rows[2].addCard(this.deck.cards[2]);

        this.rows.forEach(row => {
            app.stage.addChild(row);
        });

        app.ticker.add(this.update);
    }

    update(_: any, delta: number) {
        this.rows.forEach(row => {
            // console.log(row.name + ":" + row.value());
        });
    }
}
