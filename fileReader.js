document.addEventListener('DOMContentLoaded',function(){
    const fileUpload = document.getElementById('fileUpload');
    fileUpload.addEventListener("change", handleFiles);
})

function handleFiles(e){
    
    const file = e.target.files[0];
    console.log('filesize',file.size);
    const reader = new FileReader();
    reader.onload = function (e){
        const timerStart = Date.now();
        const filesize = document.getElementById('filesize');
        const nLabel = document.getElementById('nLabel');
        const kLabel = document.getElementById('kLabel');
        const contents = document.getElementById('contents');
        const time = document.getElementById('time');

        priceArray = e.target.result.split(/[\n,\s,\r]/);

        filesize.innerText = file.size;
        nLabel.innerText = priceArray[0];
        kLabel.innerText = priceArray[1];
        contents.innerText = priceArray.slice(2,priceArray.length);

        const timerEnd = Date.now();
        console.log(timerEnd,timerStart,timerEnd-timerStart)
        time.innerText = timerEnd - timerStart
        
    };
    reader.readAsText(file)
}
