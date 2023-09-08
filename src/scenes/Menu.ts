import { Container, Graphics, Text } from "pixi.js";
import { IScene } from "./types";
import { Manager } from "../Manager";
import { List } from "@pixi/ui";
import { GameScene } from "./Game";

export class MenuScene extends Container implements IScene {
    constructor() {
        super();
        const menuContainer = new Container();
        menuContainer.x = Manager.width / 2;
        menuContainer.y = Manager.height / 4;

        const menuBox = new Graphics().beginFill(0xBEBD7F).drawRoundedRect(-200, -50, 400, 280, 20);
        const menuText = this.makeMenuItem("Main Menu", 36);
        const levelOneSelect = this.makeMenuItem("Level One", 24, () => {
            Manager.closeMenu();
            Manager.levelColor = 0x721422;
            Manager.changeScene(new GameScene());
        });

        const levelTwoSelect = this.makeMenuItem("Level Two", 24, () => {
            Manager.closeMenu();
            Manager.levelColor = 0x2D572C;
            Manager.changeScene(new GameScene());
        });

        const levelThreeSelect = this.makeMenuItem("Level Three", 24, () => {
            Manager.closeMenu();
            Manager.levelColor = 0xF54021;
            Manager.changeScene(new GameScene());
        });

        const resume = this.makeMenuItem("Resume", 28, () => {
            Manager.closeMenu();
        });

        const space = this.makeMenuItem("", 10);

        menuContainer.addChild(menuBox);
        const list = new List({
            elementsMargin: 10,
            type: "vertical",
        });
        list.addChild(menuText);
        list.addChild(space);
        list.addChild(levelOneSelect);
        list.addChild(levelTwoSelect);
        list.addChild(levelThreeSelect);
        list.addChild(space);
        list.addChild(resume);
        menuContainer.addChild(list);

        this.addChild(menuContainer);

        document.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    private onKeyDown(e: KeyboardEvent): void {
        if (e.key === "Escape") {
            Manager.closeMenu();
        }
    }

    private makeMenuItem(text: string, size: number, onClick?: () => void): Text {
        const menuText = new Text(text, {
            fontSize: size,
            fontWeight: "bold",
            fontFamily: "Georgia, serif",
        });
        menuText.anchor.x = 0.5;
        menuText.anchor.y = 0.5;

        if (onClick) {
            menuText.eventMode = 'static';
            menuText.onclick = onClick;
        }

        return menuText;
    }

    update(): void {}
}