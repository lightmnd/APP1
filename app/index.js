import filterzApp from './modules-custom/filterzApp/filterzApp';
import Fade from './modules-custom/filterzApp/animation';
import style from '../scss/style.scss';
//import { fadeOutIn } from './modules-custom/filterzApp/animation';


const myApp = () => {
    filterzApp();
    Fade();
}
myApp();

