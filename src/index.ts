import { Manager } from './Manager';
import { LoaderScene } from './scenes/Loader';

Manager.initialize(640, 480, 0x6495ed);

const loading: LoaderScene = new LoaderScene();
Manager.changeScene(loading);
