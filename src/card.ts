import { Point, Sprite } from "pixi.js";

export class Card extends Sprite {
    value: number = 0;
    velocity: Point;

    constructor(texture?: PIXI.Texture, value: number = 0) {
        super(texture);

        this.value = value;
        this.velocity = new Point(1, 1)
    }
}