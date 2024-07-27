import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Angular", percent:90,remark:'excellent'}, {name:"JavaScript, TypeScript",percent:90,remark:'excellent'},{name:"Node.js",percent:90,remark:'excellent'},{name:"HTML, CSS, BootStrap",percent:80,remark:'very-good'}, {name:"Java, J2EE, Spring",percent:70,remark:'good'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Postman",percent:90,remark:'excellent'},{name:"Linux, Windows",percent:70,remark:'very-good'},{name:"MySql, PgSql, MongoDB",percent:90,remark:'excellent'},{name:"Docker, Kubernetes",percent:40,remark:'average'}],
    methodologies:[{name:"Scrum",percent:70,remark:'good'},{name:"Uml",percent:90,remark:'excellent'},{name:"Disign Thinking",percent:70,remark:'good'},{name:"TDD",percent:90,remark:'excellent'},{name:"DevOps",percent:40,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english);
  }

  ngOnInit(): void {
  }

}

    
    
  
