import { Freelancer } from "../freelancer/freelancer";


export class Skilled{

    id?:SkilledId;
    freelancer?:Freelancer;
    skill?:Skill;
    
}
export class SkilledId
{
    freelancerId?:number;
    skillId?:number;
}
export class Skill{
    name?:String;
    id?:number;



}