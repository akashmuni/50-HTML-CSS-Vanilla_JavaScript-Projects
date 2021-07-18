console.log("this is drap and drop project");


const imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

//Event listneres for draggable element imgbox 
imgBox.addEventListener('dragstart', (e)=>{
    console.log('DragStart has been triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        
        e.target.className = 'hide';
    }, 0);
    
});
imgBox.addEventListener('dragend', (e)=>{
    console.log('DragEnd has been triggered');
    e.target.className ='imgBox';


});

for (whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('Dragover has been triggered');


    });
    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('dragenter has been triggered');
        e.target.className += ' dashed'


    });
    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('dragleave has been triggered');
        e.target.className = ' whiteBox'


    });
    whiteBox.addEventListener('drop', (e)=>{
        console.log('drop has been triggered');
        e.target.append(imgBox)


    });
}