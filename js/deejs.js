
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
