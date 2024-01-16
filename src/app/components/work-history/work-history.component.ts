import { Component } from '@angular/core';

@Component({
  selector: 'app-work-history',
  standalone: true,
  imports: [],
  templateUrl: './work-history.component.html',
  styleUrl: './work-history.component.css',
})
export class WorkHistoryComponent {
  items: WH[] = [
    {
      path:'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      name: 'Full Stack Developer',
      date: 'May 2022 - September 2023',
      company: 'Revature/Citibank',
      location: 'Irving, TX',
      description: [
        "Design and implement server-side logic, databases, and APIs.",
        "Use Java and Spring Boot to build and maintain server-side components.",
        "Create responsive and user-friendly user interfaces using HTML, CSS, JavaScript, and Angular.",
        "Ensure a seamless user experience by optimizing web application performance and usability."
    ]
    },
    {
      path:'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      name: 'Paraprofessional',
      date: 'October 2019 - May 2021',
      company: 'Guiding Light Academy',
      location: 'Shorewood, IL',
      description: [
        "Assisted teachers with planning and preparing lessons for students.",
        "Provided guidance to students in the classroom setting.",
        "Diagnosed system malfunctions and provided troubleshooting",
        "Identified problems in printers, scanners and networking hardware, applying required fixes or escalating issues."
      ]
    },
    {
      path:'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      name: 'Graphic Designer Freelancer',
      date: 'April 2018 - October 2019',
      location: 'Plainfield, IL',
      description: [
        "Create visually appealing graphics, illustrations, and layouts for various print and digital materials.",
        "Develop original and innovative designs that align with project objectives and brand guidelines.",
        "Craft web graphics, banners, social media images, email templates, and other digital assets to enhance online presence.",
      ]
    },
  ];
}

interface WH {
  path:string;
  name: string;
  date: string;
  company?: string;
  location: string;
  description: string[]
}
