import { Application, Spritesheet } from "pixi.js";
import { IScene } from "./scenes/types";

export class Manager {
    private static app: Application;
    private static currentScene: IScene;
    private static _width: number;
    private static _height: number;
    public static playerSprites: Spritesheet;

    public static get width(): number {
        return Manager._width;
    }
    public static get height(): number {
        return Manager._height;
    }

    public static initialize(width: number, height: number, background: number): void {
        Manager._width = width;
        Manager._height = height;

        Manager.app = new Application({
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: background,
            width: width,
            height: height
        });

        Manager.app.ticker.add(Manager.update)
    }

    public static changeScene(newScene: IScene): void {
        if (Manager.currentScene) {
            Manager.app.stage.removeChild(Manager.currentScene);
            Manager.currentScene.destroy();
        }

        Manager.currentScene = newScene;
        Manager.app.stage.addChild(Manager.currentScene);
    }

    private static update(framesPassed: number): void {
        if (Manager.currentScene) {
            Manager.currentScene.update(framesPassed);
        }
    }
}
