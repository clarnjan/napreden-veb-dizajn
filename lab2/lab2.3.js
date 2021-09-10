function flatten(niza) {
    let spl =niza.toString().split(",")
    let result="";
    for(let i=0;i<spl.length;i++){
        if(i<spl.length-1)
            result+=spl[i]+", "
        else
            result+=spl[i]
    }
    return result
}
function difference(a,b){
    a=flatten(a).split(",");
    b=flatten(b).split(",");
    let x=[];
    for(let i=0;i<a.length;i++){
        let put=true;
        for(let j=0;j<x.length;j++)
            if(parseInt(a[i])===x[j]){
                put=false;
                break;
            }
        if(put)
            x.push(parseInt(a[i]))
    }
    for(let i=0;i<b.length;i++){
        let put=true;
        for(let j=0;j<x.length;j++)
            if(parseInt(b[i])===x[j]){
               put=false;
               break;
            }
        if(put)
            x.push(parseInt(b[i]))
    }
    return x;

}