import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  items: SVG[] = [
    {
      href: 'mailto:contact&#64;lydiayoussef.com',
      path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
      polyline: '22,6 12,13 2,6',
    },
    {
      href: 'https://www.linkedin.com/in/ledya-bakloug-3773b5226/',
      path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
      rect: { x: '2', y: '9', width: '4', height: '12' },
      circle: { cx: '4', cy: '4', r: '2' },
    },
    {
      href: 'https://github.com/LedyaBakloug',
      path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    },
  ];
}

interface Circle {
  cx: string;
  cy: string;
  r: string;
}

interface Rect {
  x: string;
  y: string;
  width: string;
  height: string;
}

interface SVG {
  href: string;
  path: string;
  polyline?: string;
  rect?: Rect;
  circle?: Circle;
}
