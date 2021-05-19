import { Freelancer } from "../freelancer/freelancer";


export class Skilled{

    idSkilled?:IdSkilled;
    freelancer?:Freelancer;
    skill?:Skill;
    
}
export class IdSkilled
{
    idFreelancer?:number;
    idSkill?:number;
}
export class Skill{
    name?:String;
    id?:number;

}