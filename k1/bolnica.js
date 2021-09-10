var hashCode = function(s){
    return  String(s).split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
class Patient {
    constructor(name) {
        this.name=name;
        this.id=hashCode(name);
    }
}
class CovidPositive extends Patient{
    constructor(name,date,gender,age,municipality,symptoms,respiratory_problem,hyperglycaemia) {
        super(name);
        this.gender=gender;
        this.age=age;
        this.date=date;
        this.positive=true;
        this.municipality=municipality;
        this.symptoms=symptoms;
        this.respiratory_problem=respiratory_problem;
        this.hyperglycaemia=hyperglycaemia;
    }
    risk(){
        if(this.symptoms && this.respiratory_problem && this.hyperglycaemia){
            if(this.age>75 || (this.age>50 && this.gender=="male")){
                return "high risk";
            }
        }
        else if(!this.symptoms && this.positive && this.respiratory_problem && this.hyperglycaemia){
            return "high risk";
        }
        else if(this.symptoms && this.positive && (this.respiratory_problem || this.hyperglycaemia)){
            return  "average risk"
        }
        else if(this.symptoms && this.positive && !this.respiratory_problem && !this.hyperglycaemia){
            return  "low risk"
        }
        else if(!this.symptoms && this.positive && !this.respiratory_problem && !this.hyperglycaemia){
            return  "low risk (resistant of covid)"
        }
        else{
            return  "average risk"
        }
    }
    toString(){
        if(this.positive==true)
        return "Patient: "+this.id+" "+this.name+" is with "+this.risk();
    }
}
class EHospital{
    constructor() {
        this.lista=[];
    }
    add_patient(p){
        this.lista.push(p);
    }
    test_patient(p){
        var x=new Date();
        x.setDate(p.date.getDate()+15)
        if(new Date()<x){
            p.positive=false;
        }
    }
    check(){
        for(let i=0;i<this.lista.length;i++){
            this.test_patient(this.lista[i]);
            this.lista[i].toString();
        }
    }
    print(){
        for(let i=0;i<this.lista.length;i++)
            console.log(this.lista[i]);
    }
    safe_zone(m){
        let vk=0.0;
        let z=0.0;
        for(let i=0;i<this.lista.length;i++){
            if(this.lista[i].municipality==m){
                vk+=1;
                if(this.lista[i].positive){
                    z+=1;
                }
            }
        }
        console.log("You are in "+100/(vk/z)+"% safe zone");
    }
}
