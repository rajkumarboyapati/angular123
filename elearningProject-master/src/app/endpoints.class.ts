export class endpoints{
    static addemployee:string="/employee/addemployee";
    static addmanager:string="/manager/addManager";
    static addinstructor:string="/instructor/addinstructor";
    static validateuser:string="/user/validate";
    static allEmployees:string="/employee/getemployee";
    static addCourse:string="/course/addcourse";
    static getmanagers:string="/manager/getallmanagers";
    static getinstructior:string="/instructor/getinstructor";
    static getAllCourses:string="/course/getallcourses";
    static getTeamsByUser:string="/manager/getteams";
    static employeesByTeamId:string="/employee/employeesbyteam";
    static getManagerId:string="/manager/getmanagerid";
    static assignCourse:string="/assign/add";
    static quitionsList:string="/questions/quiz";
    static reports:string="questions/addreports";
    static employeeByuser:string="/employee/getemployeebyuser";
    static employeeCourseAssigned:string="/assign/getassignedcourse";
    static getCourseById:string="/course/getcoursebyid";
    static reportsByManager:string="/reports/reportsbymanagerId";
    static getInstructorByUserId:"/instructor/getinstructorbyiduserId";
    static getCoursesByInstructorName:"/course/getallcoursesbyinstructor";
}