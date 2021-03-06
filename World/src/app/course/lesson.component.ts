import { CourseService } from './../_services/course.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Lesson } from '../_models';
import { LessonService, AuthenticationService, AlertService } from '../_services';

@Component({ 
    templateUrl: 'lesson.component.html',
    styleUrls: ['./ss_course.component.css'] 
})

export class LessonComponent implements OnInit {
  lesson: any[] = [];

  searchText = '';
  id!: any;

  constructor(
      private lessonService: LessonService,
      private courseService: CourseService,
      private alertService: AlertService,

      private _Activatedroute:ActivatedRoute,
      private router: Router
  ) {
    //this.id = this.router.getCurrentNavigation().extras.state.example
  }

  ngOnInit() { 
      this._Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
      });

      this.loadAll();
  }

  private loadAll() {
    this.lessonService.getLessonByCourseId(this.id)
    .pipe(first())
    .subscribe(
      lesson => {
        this.lesson = lesson;
      },
      error => {
        this.alertService.error('Error, Data (Lesson) was unsuccesfully retrieved');
      } 
    );
  }

    newLessonClicked = false;

  model: any = {};
  model2: any = {}; 

  model3:Lesson = {
    LessonId: 0,
     CourseId: 1,
    LessonCompletionStatusId: 1,
     LessonDescription: '',
     LessonName: ''
  };

  //Remove this bad boy
  testData() {
    this.lesson.push(
      { lessonId: 1, courseId: 1, lessonCompletionStatusId: 1, lessonDescription: '213', lessonName: '3212'},
      { lessonId: 1, courseId: 1, lessonCompletionStatusId: 1, lessonDescription: 'fg', lessonName: '3212'},
      { lessonId: 1, courseId: 1, lessonCompletionStatusId: 1, lessonDescription: '2zxklcmkc13', lessonName: '3212'},
      { lessonId: 1, courseId: 1, lessonCompletionStatusId: 1, lessonDescription: '2m13', lessonName: '3212'},
    );
  }

  addLesson() { 
    if(Object.keys(this.model).length < 2)
    {
      this.alertService.error("Error, you have an empty feild");
      this.newLessonClicked = !this.newLessonClicked;
      this.model = {};
    }
    else if((Object.keys(this.model).length==2))
    {
      this.model3.CourseId = this.id;
      this.model3.LessonDescription = this.model.LessonDescription;
      this.model3.LessonName = this.model.LessonName;
    
      this.lessonService.create(this.model3)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Creation (Lesson) was successful', true);
                   this.loadAll();
                    this.newLessonClicked = !this.newLessonClicked;
                    this.model = {};
                },
                error => {
                    this.alertService.error('Error, Creation (Lesson) was unsuccesful');
                });
    }
  }
    
  
  deleteLesson(i: number) {
    this.lessonService.delete(i)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Deletion (Lesson) was successful', true);
                    this.loadAll();
                },
                error => {
                    this.alertService.error('Error, Deletion (Lesson) was unsuccesful');
                });
  }

  myValue = 0;

  editLesson(editLessonInfo: number) {
    this.model2.LessonDescription = this.lesson[editLessonInfo].lessonDescription;
    this.model2.LessonName = this.lesson[editLessonInfo].lessonName;
    this.myValue = editLessonInfo;
  }

  updateLesson() {
    let editLessonInfo = this.myValue;

    this.model3.CourseId = this.id;
    this.model3.LessonDescription = this.model2.LessonDescription;
    this.model3.LessonName = this.model2.LessonName;

    for(let i = 0; i < this.lesson.length; i++) {
      if(i == editLessonInfo) 
      {
        this.lessonService.update(this.lesson[editLessonInfo].lessonId, this.model3)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Update was successful', true);
                    this.loadAll();
                },
                error => {
                    this.alertService.error('Error, Update was unsuccesful');
                });
      }
    }
    
    }

    addNewLessonBtn() {
        this.newLessonClicked = !this.newLessonClicked;
      }

      

}