import type { ResolverManifest } from "pixi.js";

export const manifest:ResolverManifest = {
    bundles: [
        {
            name : "bundleName",
            assets:
            {
                "characterSprites.png" : "./characterSprites.png",
            }
        }
    ]
};

export const CharacterSprites = {
    frames: {
        idle1: {
            frame: { x: 0, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle2: {
            frame: { x: 48, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle3: {
            frame: { x: 96, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle4: {
            frame: { x: 144, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle5: {
            frame: { x: 192, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle6: {
            frame: { x: 240, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle7: {
            frame: { x: 288, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle8: {
            frame: { x: 336, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle9: {
            frame: { x: 384, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        idle10: {
            frame: { x: 432, y: 0, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run1: {
            frame: { x: 0, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run2: {
            frame: { x: 48, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run3: {
            frame: { x: 96, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run4: {
            frame: { x: 144, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run5: {
            frame: { x: 192, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run6: {
            frame: { x: 240, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run7: {
            frame: { x: 288, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        },
        run8: {
            frame: { x: 336, y: 48, w: 48, h: 48 },
            sourceSize: { w: 48, h: 48 },
            spriteSourceSize: { x: 0, y: 0, w: 48, h: 48 }
        }
    },
    meta: {
		image: './characterSprites.png',
		format: 'RGBA8888',
		size: { w: 480, h: 96 },
		scale: '1'
	},
	animations: {
		playerIdle: ['idle1', 'idle2', 'idle3', 'idle4', 'idle5', 'idle6', 'idle7', 'idle8', 'idle9', 'idle10'],
		playerRun: ['run1', 'run2', 'run3', 'run4', 'run5', 'run6', 'run7', 'run8']
	}
}
