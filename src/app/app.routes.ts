import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectsComponent } from './components/projects/projects.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', 'title': 'Home', component: HomeComponent },
    { path: 'contact', 'title': 'Contact', component: ContactComponent },
    { path: 'education', 'title': 'Education', component: EducationComponent },
    { path: 'skills', 'title': 'Skills', component: SkillsComponent },
    { path: 'work-history', 'title': 'Work History', component: WorkHistoryComponent },
    { path: 'projects', 'title': 'projects', component: ProjectsComponent },
    { path: '**', component: PageNotFoundComponent}


];

