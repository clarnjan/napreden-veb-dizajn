class NPC {
    constructor(name,hp=100) {
        this.name=name;
        this.hp=hp;
    }
    status(){
        console.log(this.name+" "+this.hp);
    }
}
class Hero extends NPC{
    constructor(name,hp,damage=10) {
        super(name,hp);
        this.damage=damage;
        this.critical=false;
    }
    attack(c){
        if(this.critical){
            c.hp-=this.damage*1.5;
            if(c instanceof Hero){
                if(c.hp>0){
                    c.critical=true;
                }
                this.critical=false;
            }
        }
        else{
            c.hp-=this.damage;
        }
    }
}

let N=Math.floor(Math.random()*40)+10;
let a=[];
let numNPC=0;
let numHero=0;
for(let i=0;i<N;i++) {
    if(Math.random()<0.5){
        a.push(new NPC("NPC"+numNPC));
        numNPC++;
    }else{
        a.push(new Hero("hero"+numHero));
        numHero++;
    }
}
let crit=Math.floor(Math.random()*numHero);
let i=0;
for(let j=0;j<a.length;j++){
    if(a[j] instanceof Hero){
        if(i==crit){
            a[j].critical=true;
            break;
        }
        i++;
    }
}

while(a.length>1) {
    for (let j = 0; j < a.length; j++) {
        if (a[j] instanceof Hero) {
            let h = Math.floor(Math.random() * a.length);
            if(j!=h)
                a[j].attack(a[h]);
            if (a[h].hp <= 0) {
                a.splice(h, 1);
            }
        }
    }
    for(let k=0;k<a.length;k++){
        a[k].status();
    }
    console.log();
}
a[0].status();