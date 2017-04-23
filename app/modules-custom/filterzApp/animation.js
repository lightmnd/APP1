import filterzApp from './filterzApp';
import { wc } from '../../windowLogger';
import windowLogger from '../../windowLogger';

export function effect(){
    
    const box = document.getElementsByClassName('btn-upload-new');
    let efx = function fadeOutIn(elem, speed ) {
        let inInterval = setTimeout(() => {
        console.log("elem", elem, " - ", speed)
        if (elem[0]){
                elem[0].style.display = 'block';                
            }  
        console.log("interv", inInterval)
        }, speed / 50 );
    }

   efx(box, 2000);
}
