import { Container, Graphics, Text } from "pixi.js";
import { IScene } from "./types";
import { Manager } from "../Manager";
import { List } from "@pixi/ui";

export class MenuScene extends Container implements IScene {
    constructor() {
        super();
        const menuContainer = new Container();
        menuContainer.x = Manager.width / 2;
        menuContainer.y = Manager.height / 2;
        const menuBox = new Graphics().beginFill('red').drawRoundedRect(-200, -50, 400, 200, 20);
        const menuText = new Text("Main Menu", {
            fontSize: 36,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
        });
        menuText.anchor.x = 0.5;
        menuText.anchor.y = 0.5;
        const levelOneSelect = new Text("Level One", {
            fontSize: 36,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
        });
        levelOneSelect.anchor.x = 0.5;
        levelOneSelect.anchor.y = 0.5;

        menuContainer.addChild(menuBox);
        const list = new List({
            elementsMargin: 10,
            vertPadding: 10,
            type: "vertical",
        });
        list.addChild(menuText);
        list.addChild(levelOneSelect);
        menuContainer.addChild(list);

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