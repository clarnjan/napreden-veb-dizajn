function Character(name){
    this.name=name;
    this.hp=100;
    this.attack= function (c){
        c.hp-=5;
    }
}
var a=[];
c1=new Character("a");
c2=new Character("b");
c3=new Character("c");
c4=new Character("d");
c5=new Character("e");
c6=new Character("f");

a.push(c1);
a.push(c2);
a.push(c3);
a.push(c4);
a.push(c5);
a.push(c6);

// a.splice(3,1);

while(a.length>1) {
    for (let i = 0; i < a.length; i++) {
        var j=Math.floor(Math.random()*a.length);
        a[i].attack(a[j]);
        if(a[j].hp<=0)
            a.splice(j,1);
    }
    console.log(a);
}
console.log("pobednik e "+a[0].name);

