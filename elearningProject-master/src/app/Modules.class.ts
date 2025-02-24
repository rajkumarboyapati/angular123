import { Quiz } from "./Quiz.class";
import { Vedio } from "./Vedio.class";

export class Modules{

    moduleId: number
    moduleName:string;
    moduleContent: string;
    materialType: string;
    materialName:string;
    quizRef: Quiz=new Quiz();
    vedioRef: Vedio[]=[];
  }