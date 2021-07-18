const text = `The Only Programming Joke I Know Is My 'Code'.` 

let index = 0;

function writeText(){
    document.body.innerHTML = text.slice(0, index);
    index++;

    if(index> text.length){
        index = 0;
    }
}
setInterval(writeText, 200);