function flatten(niza) {
    let spl =niza.toString().split(",")
    let result="[ ";
    for(let i=0;i<spl.length;i++){
        if(i<spl.length-1)
            result+=spl[i]+", "
        else
            result+=spl[i]+" ]"
    }
    return result
}

// var global=[];
// function flatten(niza){
//     if (typeof niza == "object"){
//         for(let i=0;i<niza.length;i++)
//             flatten(niza[i]);
//     }
//     else{
//         global.push(niza)
//     }
//     return global
// }
console.log(flatten([0,1,[2,3],[4]]))