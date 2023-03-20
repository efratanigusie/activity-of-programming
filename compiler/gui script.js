let message = document.querySelector(".five");
function uploadAndReadFile(files) {
    let fr = new FileReader();
    fr.onload = function (e) {
        message.value = e.target.result;
        message.style.color="white";
    };
    console.log(message)
    fr.readAsText(files[0]);
}

let copy1=document.querySelector(".copy-btn1").addEventListener("click",function(){
    let copyText1=document.querySelector(".five");
    console.log(copyText1)
    copyText1.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})
let copy2=document.querySelector(".copy-btn2").addEventListener("click",function(){
    let copyText2=document.querySelector(".six");
    console.log(copyText2)
    copyText2.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
})




