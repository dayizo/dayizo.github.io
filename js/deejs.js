const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active')
    })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}



var ImageIndex = 0;
function swipe(event, direction){
    var midpoint = Math.floor(screen.width/2);
    var px = event.pageX;
    var items = document.getElementsByClassName('image-wrapper');
    var itemActive = items[ImageIndex]; 
    if (direction === 'left') {
        itemActive.style.marginLeft = '-100%';
        itemActive.style.transition = '1s ';
        ImageIndex = ImageIndex < items.length - 1 ? ImageIndex + 1 : ImageIndex;
    }else{
        itemActive.style.marginLeft = '0';
        itemActive.style.transition = '1s ';
        ImageIndex = ImageIndex >= 1 ? ImageIndex - 1 : 0;
    }
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

