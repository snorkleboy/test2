
document.addEventListener('DOMContentLoaded',function(){
    const fileUpload = document.getElementById('fileUpload');
    fileUpload.addEventListener("change", handleFiles);
})

function handleFiles(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e){

        const filesize = document.getElementById('filesize');
        const nLabel = document.getElementById('nLabel');
        const kLabel = document.getElementById('kLabel');
        const time = document.getElementById('time');
        const data = e.target.result.split(/[\n]/);
        const resultList = document.getElementById('result-UL')
        filesize.innerText = file.size;
        nk = data[0].split(' ');
        nLabel.innerText = nk[0];
        kLabel.innerText = nk[1];

        priceArray = data[1].split(' ');
        let timerStart = Date.now();
        result = SubSeqAnalizer(priceArray, nk[1]);
        let timerEnd = Date.now();
        resultList.innerText = result;
        time.innerText = timerEnd - timerStart
        
    };
    reader.readAsText(file)
}
