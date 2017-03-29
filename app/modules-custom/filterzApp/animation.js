import filterzApp from './filterzApp';
import { wc } from '../../windowLogger';
import windowLogger from '../../windowLogger';

export default class Fade{
    
    constructor(elem, speed){
        this.elem = elem || ""
        this.speed = speed || 2000
    }

    getFade(){
        return this.elem;
    }

    getSpeed(){
        return this.speed;
    }

}