import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { AchievementComponent } from './achievement/achievement.component';

const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'skills', component: SkillsComponent }, 
  { path: 'projects', component: ProjectsComponent }, 
  { path: 'cv', component: CurriculumVitaeComponent }, 
  { path: 'achievements', component: AchievementComponent }, 
  { path: 'about', component: AboutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
