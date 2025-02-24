import { Course } from "./Course.class";
import { Employee } from "./Employee.class";

export class Reports{
    reportId:number;
    progress:number;
    employeeRef:Employee;
    courseRef:Course;
    quizId:number;
    quizScore:number;
}