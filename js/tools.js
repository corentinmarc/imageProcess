// tools est une librairie d'aide pour effectuer des traitements sur des images.
var tools = {};

// negative est une fonction qui permet d'obtenir le négatif d'une image.
tools.negative = function(image){
    if( image.numPixels && image.pixels ){
        for (var i = 0; i < image.numPixels; i++) {
            image.pixels[i*4] = 255-image.pixels[i*4]; // Red
            image.pixels[i*4+1] = 255-image.pixels[i*4+1]; // Green
            image.pixels[i*4+2] = 255-image.pixels[i*4+2]; // Blue
        };
    } else {
        alert('Error in function tools.inverse');
    }
};