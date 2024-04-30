import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

items:SVG[]=[
  {
    path:'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    name: 'Citizenship Civics Test',
    date: 'April 2024 - Current',
    description: [
      "The citizenship civics test practice application is a MERN application designed to help individuals prepare for citizenship test.",
      "Users have the options of flashcards, multiple choice, review all questions, and practice tests."
    ]
  },
  {
    path:'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    name:'Portfolio',
    date:'Febuary 2024 - March 2024',
    description:[
      "Created my personal portfolio website using Angular 17 and Tailwind CSS.",
      "Deployed my personal portfolio website using Netlify and GitHub."
    ]
  }
]
}
interface SVG {
  path: string;
  name: string;
  date:string;
  description: string[];
}
