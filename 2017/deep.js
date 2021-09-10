deep_clone=function (o){
    x={};
}

deep= function(o){
    if(o instanceof Object){

    }
    else{
        return o;
    }
}

a=[1,2,[3,4],5];
b=deep_clone(a);
b=deep_clone({f:1,g:2});
deep_clone(1)
deep_clone(deep(1));
console.log(b);