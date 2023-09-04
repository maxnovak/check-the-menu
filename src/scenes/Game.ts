import { AnimatedSprite, Container, Text } from "pixi.js";
import { Manager } from "../Manager";
import { IScene } from "./types";

export class GameScene extends Container implements IScene {
    private player: AnimatedSprite;
    private stepsText: Text;
    private playerVelocityX: number;
    private playerVelocityY: number;
    private numberOfSteps: number;

    constructor() {
        super();

        this.player = new AnimatedSprite(Manager.playerSprites.animations.playerIdle);
        this.player.animationSpeed = 0.1666;
        this.player.play();

        this.player.anchor.set(0.5);
        this.player.x = Manager.width / 2;
        this.player.y = Manager.height / 2;
        this.addChild(this.player);

        this.playerVelocityX = 0;
        this.playerVelocityY = 0;
        this.numberOfSteps = 0;

        document.addEventListener("keydown", this.onKeyDown.bind(this));
        document.addEventListener("keyup", this.onKeyUp.bind(this));

        this.stepsText = new Text(this.numberOfSteps, {
			fontSize: 36,
			fontWeight: "bold",
			fontFamily: "Georgia, serif",
		});
        this.addChild(this.stepsText);
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key === "w" || e.key === "ArrowUp") {
            this.playerVelocityY = -5;
        }
        if (e.key === "d" || e.key === "ArrowRight") {
            this.playerVelocityX = 5;
        }
        if (e.key === "s" || e.key === "ArrowDown") {
            this.playerVelocityY = 5;
        }
        if (e.key === "a" || e.key === "ArrowLeft") {
            this.playerVelocityX = -5;
        }
    }
    
    private onKeyUp(e: KeyboardEvent): void {
        if (e.key === "w" || e.key === "ArrowUp") {
            this.playerVelocityY = 0;
        }
        if (e.key === "d" || e.key === "ArrowRight") {
            this.playerVelocityX = 0;
        }
        if (e.key === "s" || e.key === "ArrowDown") {
            this.playerVelocityY = 0;
        }
        if (e.key === "a" || e.key === "ArrowLeft") {
            this.playerVelocityX = 0;
        }
    }

    public update(framesPassed: number): void {
        this.player.x += this.playerVelocityX * framesPassed;
        this.player.y += this.playerVelocityY * framesPassed;
        if (this.playerVelocityX != 0 || this.playerVelocityY != 0) {
            this.numberOfSteps += Math.round(framesPassed);
        }
        this.stepsText.text = this.numberOfSteps;
    }
}