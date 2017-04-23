import $ from 'jquery';

export function wc(res){
    $("#content").append('<button class="btn btn-primary btn-upload-new">' + res + '</button>')
    console.log("res:", res)
}