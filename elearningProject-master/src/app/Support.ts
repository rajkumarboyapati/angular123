import { User } from "./User.class"

export class Support{
    
        supportId: number;
        supportName: string;
        supportType: string;
        status: string;
        user: User=new User();
        issue: string;
      
}