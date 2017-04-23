import { filterzApp } from '../../index.js';
import { wc } from '../../windowLogger';
import windowLogger from '../../windowLogger';
//import animation from './animation.js';
//import { fadeOutIn } from './animation.js';
import animation from './animation';
import { effect } from './animation';
//import session from '../session/session';

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
                       // img.height = "700";
                        //img.width = "700";
                        img.src = e.target.result;
                        dvPreview.appendChild(img);
                            const mainBtn = document.getElementById('fileupload');
                            mainBtn.style.opacity += 0.1;
                            setTimeout(() => {
                                //mainBtn[0].style.display = "none";
                                mainBtn.remove();
                            }, 300);
                            let filtBtn = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
                            for (let i = 1; i < filtBtn.length+1; i++){
                            let slider = document.createElement('input');
                            const filters = document.createElement('button');
                            slider.id = "volume";
                            slider.type = 'range';
                            slider.min = 0;
                            slider.max = 100;
                            slider.value = 0.5;
                            slider.step = 0.1;
                            slider.classList.add('slider' + i);
                            filters.appendChild(slider);
                            filters.setAttribute('class', 'btn btn-secondary bg-inverse center-block btn-filter filters' + i);
                            let t = document.createTextNode('Filters ' + i);
                            //filters.style.color ='#FFF';
                            filters.appendChild(t);
                            dvPreview.appendChild(filters);
                                filters.addEventListener("click", () =>{
                                    img.setAttribute('class', 'filters' + i)                                
                                    setTimeout(() => {
                                        setTimeout(() =>{
                                        const btnNew = document.getElementsByClassName('upload-new');
                                        console.log("btnNew", btnNew)

                                        btnNew[0].style.display = "block";
                                             setTimeout(() =>{
                                                if (btnNew[0].style.display != "none") {
                                                    btnNew[0].addEventListener('click', () => {
                                                        dvPreview.innerHTML = "";
                                                        // mainBtn[0].style.display = "block";                                                        
                                                        // mainBtn[0].style.opacity = 1;+
                                                        window.location.reload();
                                                    });
                                                };

                                            }, 500)
                                        })                               
                                    }, 1500)
                                });
                            }
                            slider.onchange = function(e){
                                let val = e.target.value;
                                console.log(val)
                            }
                    }
                    reader.readAsDataURL(file);
                } else {
                    alert(file.name + " is not a valid image file.");
                    dvPreview.innerHTML = "";
                    console.log(">>>", file.name)
                    return false;
                }
            }
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }

}