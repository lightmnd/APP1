import html2canvas from 'html2canvas';
import $ from 'jquery';


const screenShot = () => html2canvas(document.querySelector('#main-title'), {
            allowTaint: true,
            onrendered: (canvas) => {
                document.body.appendChild(canvas);
            },
            width:320,
            height:220
        });
    
    let btnSaveScreen = document.querySelector('#save-screen');
    console.log('click', btnSaveScreen)
    btnSaveScreen.addEventListener('click', () =>{
        return screenShot();
    });

    // $(document).ready(function() {
    //     $('#save-screen').click(function(){
    //         html2canvas($("#target"), {
    //             allowTaint: true,
    //             onrendered: function(canvas) {
    //                     $('#target-test').prepend(canvas);
    //             var dataURL = canvas.toDataURL();
    //                 console.log(dataURL);
    //             }
    //       });
    //     });
    //     });


export default screenShot;