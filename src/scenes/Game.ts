import { AnimatedSprite, Container, Text } from "pixi.js";
import { Manager } from "../Manager";
import { IScene } from "./types";

const PLAYER_X_BUFFER = 8;
const PLAYER_Y_BUFFER = 12;

export class GameScene extends Container implements IScene {
    private player: AnimatedSprite;
    private stepsText: Text;
    private playerVelocityX: number;
    private playerVelocityY: number;
    private numberOfSteps: number;
    private isRunning: boolean;

    constructor() {
        super();

        this.player = new AnimatedSprite(Manager.playerSprites.animations.playerIdle);
        this.player.animationSpeed = 0.1666;
        this.player.play();
        this.isRunning = false;

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
        this.stepsText.y = 36;
        this.addChild(this.stepsText);
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (Manager.menuOpen) {
            this.playerVelocityY = 0;
            this.playerVelocityX = 0;
            if (this.isRunning) {
                this.isRunning = false;
                this.player.textures = Manager.playerSprites.animations.playerIdle;
                this.player.play();
            }

            return;
        }
        if (e.key === "w" || e.key === "ArrowUp") {
            this.playerVelocityY = -5;
        }
        if (e.key === "d" || e.key === "ArrowRight") {
            this.player.scale.x = 1;
            this.playerVelocityX = 5;
        }
        if (e.key === "s" || e.key === "ArrowDown") {
            this.playerVelocityY = 5;
        }
        if (e.key === "a" || e.key === "ArrowLeft") {
            this.player.scale.x = -1;
            this.playerVelocityX = -5;
        }
        if ((this.playerVelocityX != 0 || this.playerVelocityY != 0) && !this.isRunning) {
            this.isRunning = true;
            this.player.textures = Manager.playerSprites.animations.playerRun;
            this.player.play();
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
        if (this.playerVelocityX == 0 && this.playerVelocityY == 0 && this.isRunning) {
            this.isRunning = false;
            this.player.textures = Manager.playerSprites.animations.playerIdle;
            this.player.play();
        }
    }

    public update(framesPassed: number): void {
        const newLocationX = this.player.x + this.playerVelocityX * framesPassed
        if (newLocationX >= PLAYER_X_BUFFER && newLocationX <= Manager.width - PLAYER_X_BUFFER) {
            this.player.x += this.playerVelocityX * framesPassed;
        }
        const newLocationY = this.player.y + this.playerVelocityY * framesPassed
        if (newLocationY >= PLAYER_Y_BUFFER && newLocationY <= Manager.height - PLAYER_Y_BUFFER) {
            this.player.y += this.playerVelocityY * framesPassed;
        }
        if (this.playerVelocityX != 0 || this.playerVelocityY != 0) {
            this.numberOfSteps += Math.round(framesPassed);
        }
        this.stepsText.text = this.numberOfSteps;
    }
}