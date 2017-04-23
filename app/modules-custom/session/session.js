import filterzApp from '../filterzApp/filterzApp';
import { wc } from '../../windowLogger';
import windowLogger from '../../windowLogger';

export default () => {
    
    let setC = function setCookie(cname,cvalue,exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    let getC = function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let checkC = function checkCookie() {
        let user=getC("username");
        if (user != "") {
            //alert("Welcome again " + user);
        } else {
            //user = prompt("Please enter your name:","");
            if (user != "" && user != null) {
                setC("username", user, 30);
            }
        }
    }
    checkC();
}