import { Container, Graphics, Text } from "pixi.js";
import { IScene } from "./types";
import { Manager } from "../Manager";

export class MenuScene extends Container implements IScene {
    constructor() {
        super();
        const menuContainer = new Container();
        menuContainer.x = Manager.width / 2;
        menuContainer.y = Manager.height / 2;
        const menuBox = new Graphics().beginFill('red').drawRect(-200, -50, 400, 100);
        const menuText = new Text("Main Menu", {
            fontSize: 36,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
        });
        menuText.anchor.x = 0.5;
        menuText.anchor.y = 0.5;
        menuContainer.addChild(menuBox);
        menuContainer.addChild(menuText);
        
        this.addChild(menuContainer);

        document.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key === "Escape") {
            Manager.closeMenu();
        }
    }

    update(): void {}
}