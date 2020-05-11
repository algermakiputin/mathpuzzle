var fill;
var empties;
 
function loadDragDrop() {

    fill = document.querySelector('.fill');
    empties = document.querySelectorAll('.empty');

    // Fill listeners
    fill.addEventListener('touchmove', touchstart,false);
    fill.addEventListener('touchend', dragEnd); 

    

    // Loop through empty boxes and add listeners
    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }
}

function touchstart(e) {
    // grab the location of touch 
    var touchLocation = e.targetTouches[0];
    console.log(e.offsetX);
    // assign box new coordinates based on the touch.
    fill.style.left = touchLocation.clientX   + 'px';
    fill.style.top = touchLocation.clientY  + 'px';
}

function dragStart() {
    this.className += ' hold';
    // setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    // this.className += ' hovered';
}

function dragLeave() {
    this.classList.add("empty");
}

function dragDrop() {
    
    this.classList.add("empty");
    this.append(fill);
}

 