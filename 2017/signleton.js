var Singleton = (function () {
    var date;
    return {
        getInstance: function () {
            if (!date ) {
                date = Date.now();
            }
            return date ;
        }
    };
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
// var i3=new Singleton();

console.log("Same instance? " + instance1+" "+  instance2);
