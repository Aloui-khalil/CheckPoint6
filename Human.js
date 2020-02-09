class Human {
    
    name;
    job;
    skills;

    constructor(){
        this.name = "" ;
        this.job ="";
        this.skills =[];
    }

    getJob(a)
    {
      this.job= a;
    }
    learnNewSkill(b){
        this.skills.push(b);
    }
    forgetSkill(c)
    { 

        this.skills = this.skills.filter(a => a != c);
    }
    leaveJob()
    {
        this.job= "unemployed";
    }
}
class Student extends Human{
 constructor(){
     super();
 }
}

const me = new Student();

me.getJob("Web developer");
me.learnNewSkill("React");
me.forgetSkill("React");
me.leaveJob();