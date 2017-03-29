import { wc } from '../../windowLogger';
import windowLogger from '../../windowLogger';
//import animation from './animation.js';
//import { fadeOutIn } from './animation.js';
import Fade from './animation';

export default () => {
const fileUpload = document.getElementById("fileupload");
    fileUpload.onchange = () => {
        if (typeof (FileReader) != "undefined") {
            let dvPreview = document.getElementById("dvPreview");
            dvPreview.innerHTML = "";
            let regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            for (let i = 0; i < fileUpload.files.length; i++) {
                let file = fileUpload.files[i];
                if (regex.test(file.name.toLowerCase())) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        let img = document.createElement("IMG");
                        // img.height = "100";
                        // img.width = "100";
                        img.src = e.target.result;

                        dvPreview.appendChild(img);

                            const mainBtn = document.getElementsByClassName('main-btn');
                            mainBtn[0].style.opacity += 0.1;
                            setTimeout(() => {
                                mainBtn[0].style.display = "none";
                            }, 300);

                            let filtBtn = ["1", "2", "3", "4", "5", "6", "7"];
                            for (let i = 0; i < filtBtn.length; i++){
                            const filters = document.createElement('button');
                            filters.setAttribute('class', 'btn btn-secondary center-block btn-filter filters' + i);
                            let t = document.createTextNode('Filters' + i);
                            filters.appendChild(t);
                            dvPreview.appendChild(filters);
                                filters.addEventListener("click", () =>{
                                    img.setAttribute('class', 'filters' + i)                                
                                    setTimeout(() => {
                                        const btnSave = document.getElementsByClassName('btn-save');
                                        btnSave[0].style.display = "block"; 
                                        setTimeout(() =>{
                                        const btnNew = document.getElementsByClassName('btn-upload-new');
                                        console.log("btnNew", btnNew)
                                            setTimeout(() =>{

                                                //fadeIn Button Upload New
                                                function ready(){
                                                    fadeOutIn(btnNew, 2000 );
                                                }
                                                ready()
                                                    
                                                // btnNew[0].style.opacity -= 0.1;
                                                // btnNew[0].style.display = "block"; 
                                            }, 500)
                                        })                               
                                    }, 2000)
                                })
                            }
                    }
                    reader.readAsDataURL(file);
                } else {
                    alert(file.name + " is not a valid image file.");
                    dvPreview.innerHTML = "";
                    return false;
                }
            }
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }

}