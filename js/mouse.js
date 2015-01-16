var mouse={};

mouse.getPositionOnElement = function(evt, el){
    var xEl, yEl;
    if(evt.layerX && evt.layerY){
        xEl = evt.layerX;
        yEl = evt.layerY;
    } else {
        xEl = evt.pageX - el.offsetTop;
        yEl = evt.pageY - el.offsetTop;
    }
    
    return {x: xEl, y: yEl};
}