import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  items: Skill[] = [
    {
      skillName: 'Programing Languages',
      path: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      skills: [
        'Java',
        'Python',
        'Rust',
        'JavaScript',
        'TypeScript',
        'SQL',
        'NoSQL',
      ],
    },
    {
      skillName: 'Frame Works',
      path: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      skills: ['Spring Boot', 'Angular', 'React', 'Django', 'Flask', 'Rocket'],
    },
    {
      skillName: 'Soft Skills',
      path: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      skills: [
        'Time management',
        'Self-Motivation',
        'Team Player',
        'Strong Work Ethic',
        'Communication',
        'Adaptability and flexibility',
        'Detail-Oriented',
      ],
    },
    {
      skillName: 'Hobbies',
      path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      skills: [
        'Chess',
        'Reading',
        'Puzzles',
        'Volunteering',
        'Hiking',
        'Traveling',
      ],
    },
  ];
}

interface Skill {
  skillName: string;
  path: string;
  skills: string[];
}
