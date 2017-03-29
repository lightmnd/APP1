import $ from 'jquery';

export function wc(res){
    $("#content").append('<h4 class="bg bg-danger">' + res + '</h4>')
    

    console.log(res)
}