'use strict'
// tools est une librairie d'aide pour effectuer des traitements sur des images.
var tools = {};
tools.defaultImageData = null;

// negative est une fonction qui permet d'obtenir le négatif d'une image.
tools.negative = function(image){

    if(!image) {
        image =this.defaultImageData;
    }

    if( image && image.numPixels && image.pixels ){
        for (var i = 0; i < image.numPixels; i++) {
            image.pixels[i*4] = 255-image.pixels[i*4]; // Red
            image.pixels[i*4+1] = 255-image.pixels[i*4+1]; // Green
            image.pixels[i*4+2] = 255-image.pixels[i*4+2]; // Blue
        };
    } else {
        alert('Error in function tools.inverse');
    }
};

tools.getPixel = function(x, y, image){
    x = Number(x), y = Number(y);
    if(x === undefined){
        x = 0;
    }
    if(y === undefined){
        y = 0;
    }
    if(!image) {
        image =this.defaultImageData;
    }

    if(image && image.width && x > 0 && y > 0 && x < image.width && y < image.height) {
        var r = image.pixels[y*image.width*4 + x*4];
        var g = image.pixels[y*image.width*4 + x*4 + 1];
        var b = image.pixels[y*image.width*4 + x*4 + 2];
        var alpha = image.pixels[y*image.width*4 + x*4 + 3];

        return {r: r, g: g, b: b, alpha: alpha};
    } else {
        alert('Error in function tools.getPixel');
        return null;
    }
}