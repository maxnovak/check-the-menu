import { Application, Spritesheet, Text } from "pixi.js";
import { IScene } from "./scenes/types";
import { MenuScene } from "./scenes/Menu";

export class Manager {
    private static app: Application;
    private static currentScene: IScene;
    private static _width: number;
    private static _height: number;
    private static menu: Text;
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

        Manager.menu = new Text("Menu", {
            fontSize: 36,
			fontWeight: "bold",
			fontFamily: "Georgia, serif",
        });
        Manager.menu.eventMode = 'static';
        Manager.menu.on('pointerdown', () => {
            Manager.loadMenu();
        })

        Manager.app.stage.addChild(Manager.menu);
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

    public static loadMenu(): void {
        Manager.menu.eventMode = 'none';
        Manager.app.stage.addChild(new MenuScene());
    }

    public static closeMenu(): void {
        if (Manager.app.stage.children.length > 2) {
            Manager.app.stage.removeChildAt(2); // Menu will always be above the game
            Manager.menu.eventMode = 'static';
        }
    }

    private static update(framesPassed: number): void {
        if (Manager.currentScene) {
            Manager.currentScene.update(framesPassed);
        }
    }
}
