import { Employee } from "./Employee.class";
import { manager } from "./Manager.class";

export class Team{
    teamId:number;
    teamName:string;
    employeeList:Employee[]=[];
    managerRef:manager=new manager();
}