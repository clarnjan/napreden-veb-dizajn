a=(function (){
    var x;
    var i=0;
    return {
        call_up_to: function (func,num) {
            return function () {
                if (i++ < num) {
                    return x = func();
                }
                return x;
            }
        }
    };
})();

g=a.call_up_to(function (){
    setTimeout(function (){})
    return Date.now()
},2);

console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())
console.log(g())

