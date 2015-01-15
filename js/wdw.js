var wdw = {};

// Calcul des valeurs caractérisant la fenetre
wdw.compute = function(){
    this.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    this.height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    this.ratio = this.width / this.height;
};
wdw.compute();

wdw.onresize = function(){};

window.onresize = function(){
    wdw.compute();
    wdw.onresize();
};