import { Category } from "./Category.class";
import { Instructor } from "./Instructor.class";
import { Level } from "./Level.class";
import { Modules } from "./Modules.class";

export class Course{
    courseId: number;
    courseName: string;
    instructorRef: Instructor[]=[];

    moduleList: Modules[]=[];
    courseDuration: number;
    levelList: Level[]=[];
    category: Category=new Category();


  }
 