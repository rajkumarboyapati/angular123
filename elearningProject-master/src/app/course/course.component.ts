import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../Course.class';
import { CourseService } from '../course.service';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../Instructor.class';
import { Router } from '@angular/router';
import { User } from '../User.class';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
userId:number;
  constructor(private courseService:CourseService,private instructorService:InstructorService,private r:Router){
    this.userId=parseInt(sessionStorage.getItem("userId"));
  console.log(this.userId+"hii");
  }
;
  instructor:Instructor={
    instructorId: 0,
    instructorName: '',
    instructorContact: '',
    userRef: new User()
  };
  videoUrl:String;
  ngOnInit(): void {
    this.instructorService.getInstructorByUserId(this.userId).subscribe((response) => {
      this.instructor = response;
      console.log("Instructor details:", this.instructor);
  
      if (this.instructor && this.instructor.userRef) {
        this.course1.instructorRef = [{ ...this.instructor }];
      }
      
      const videoId = 1; // Replace with the actual video ID
      
    this.videoUrl = `http://localhost:8084/course/13/videos/11`;
    });
  }
    getInstructorUserId():void{
    this.instructorService.getInstructorByUserId(this.userId).subscribe((response)=>{
      this.instructor=response;
      console.log(this.userId)
      console.log(this.instructor);

    })
  }

  

  course1:Course={
    courseId: 0,
    courseName: "",
    instructorRef: [
    new Instructor(),
      // {
      //   instructorId: this.instructor.instructorId,
      //   instructorName: this.instructor.instructorName,
      //   instructorContact: this.instructor.instructorContact,
      //   userRef: {
      //     userId: this.instructor.userRef.userId,
      //     password: this.instructor.userRef.password,
      //     email: this.instructor.userRef.email,
      //     role: this.instructor.userRef.role
      //   }
      // }
     ],
    moduleList: [
      {
        moduleId: 0,
        moduleName: "",
        moduleContent: "",
        materialType: "",
        materialName: "",
        quizRef: {
          quizId: 0,
          quizName: "",
          questionsList: [
            {
              questionId: 0,
              questionName: "",
              option1: "",
              option2: "",
              option3: "",
              option4: "",
              correctAnswer: "",
              weightage: 0
            }
          ]
        },
        vedioRef: [
          {
            vedioId: 0,
            vedioName: "",
            contentType: "",
            contentName: ""
          }
        ]
      }
    ],
    courseDuration: 0,
    levelList: [
      {
        levelId: 0,
        levelName: ""
      }
    ],
    category: {
      categoryId: 0,
      categoryName: ""
    }
  }
 
  // Add Instructor
  addInstructor() {
    this.course1.instructorRef.push({
     
        instructorId: 2,
        instructorName: "dff",
        instructorContact: "ffds",
        userRef: {
          userId: 6,
          password: "fghf",
          email: "fghfghh",
          role: "insrtuctor"
        }
     
    });
  }
 
  // Remove Instructor
  removeInstructor(index: number) {
    this.course1.instructorRef.splice(index, 1);
  }
 
  // Add Module
  addModule() {
    this.course1.moduleList.push(
      {
        moduleId: 0,
        moduleName: "",
        moduleContent: "",
        materialType: "",
        materialName: "",
        quizRef: {
          quizId: 0,
          quizName: "",
          questionsList: [
            {
              questionId: 0,
              questionName: "",
              option1: "",
              option2: "",
              option3: "",
              option4: "",
              correctAnswer: "",
              weightage: 0
            }
          ]
        },
        vedioRef: [
          {
            vedioId: 0,
            vedioName: "",
            contentType: "",
            contentName: ""
          }
        ]
      });
     
  }
 
  // Remove Module
  removeModule(index: number) {
    this.course1.moduleList.splice(index, 1);
  }
 
  // Add Question to a Module
  addQuestion(moduleIndex: number) {
    this.course1.moduleList[moduleIndex].quizRef.questionsList.push({
      questionId: 0,
      questionName: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
      weightage: 0
    });
  }
 
  // Remove Question from a Module
  removeQuestion(moduleIndex: number, questionIndex: number) {
    this.course1.moduleList[moduleIndex].quizRef.questionsList.splice(questionIndex, 1);
  }
 
  // Add Video to a Module
  addVideo(moduleIndex: number) {
    this.course1.moduleList[moduleIndex].vedioRef.push({
      vedioId: 0,
            vedioName: "",
            contentType: "",
            contentName: ""
    });
  }
 
  // Remove Video from a Module
  removeVideo(moduleIndex: number, videoIndex: number) {
    this.course1.moduleList[moduleIndex].vedioRef.splice(videoIndex, 1);
  }
 
  // Add Level
  addLevel() {
    this.course1.levelList.push({
      levelId: 0,
        levelName: ""
    });
  }
 
  // Remove Level
  removeLevel(index: number) {
    this.course1.levelList.splice(index, 1);
  }
 
  // Handle form submission
  onSubmit(form: any) {

    console.log("form "+form)

    const formData=form.value;

    console.log(this.course1);
    console.log("form Data "+formData)

    this.courseService.addCourse(this.course1).subscribe((p)=>{this.course1=p;
      console.log(this.course1);
      sessionStorage.setItem("courseId",this.course1.courseId.toString());
      sessionStorage.setItem("instructorname",this.course1.instructorRef[0].instructorName);
      alert("submitted successfully");
      this.r.navigate(['/instructordash'])
    });



    
  }
  
  
  course:Course;
  addCourse():void{
    
    this.instructorService.addCourse(this.course).subscribe((Response)=>{this.course=Response
    console.log(this.course);}
  );
  
  }
  materialFiles: File[] = [];
  videoFiles: File[] = [];

  handleMaterialFile(event: any, index: number) {
    this.materialFiles[index] = event.target.files[0];
  }

  handleVideoFile(event: any, index: number) {
    this.videoFiles[index] = event.target.files[0];
  }
  submitCourse(form:any) {
    console.log("form "+form)

    const formData=form.value;
    console.log(this.course1);
    console.log("form Data "+formData)
    this.courseService.addCourse1(this.course1, this.materialFiles, this.videoFiles).subscribe(
      (response) => {
        console.log('Course added successfully!', response);
        alert('Course added successfully!');
      },
      (error) => {
        console.error('Error adding course:', error);
        alert('Failed to add course!');
      }
    );
  }
  




 
  
}
