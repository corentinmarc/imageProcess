var introspect = function(obj){
    for (prop in obj) {
        console.log(prop + ' : ' + obj[prop]);
    }
}