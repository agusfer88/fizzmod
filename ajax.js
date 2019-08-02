var xhr = new XMLHttpRequest

xhr.addEventListener("readystatechange",()=>{
    console.log(`Nuevo Estado${xhr.readyState}`)
})

xhr.open("get","info.txt");

xhr.send()