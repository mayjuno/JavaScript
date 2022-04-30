const image = document.getElementById("img1")
const boxes = document.getElementsByClassName("box");

image.addEventListener('dragstart',dragStart)
image.addEventListener('dragend',dragEnd)

for(let box of boxes){
    box.addEventListener('dragover',dragOver);
    box.addEventListener('dragenter',dragEnter);
    box.addEventListener('dragleave',dragLeave);
    box.addEventListener('drop',Drop);
}

function dragStart(){ 

    // callback function in setTimeout
    setTimeout(() =>(this.className = 'invisible'),0)

}

function dragEnd(){
    this.className = 'image';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(e){
    e.preventDefault();
}

function Drop(e){
    this.className = 'box';
    this.append(image);
}