import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  items: NavLinkDetails[] = [
    {name: "Home", route: "/home"},
    {name: "Contact", route: "/contact"},
    {name: "Education", route: "/education"},
    {name: "Skills", route: "/skills"},
    {name: "Work History", route: "/work-history"},
    {name: "Projects", route: "/projects"}
  ]
}

interface NavLinkDetails {
  name: string,
  route: string
}