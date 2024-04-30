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
      date: 'September 2022 - September 2023',
      company: 'Citibank',
      location: 'Irving, TX',
      description: [
        "Maintained internal apps by writing Unit Test cases and fixing vulnerabilities.",
        "Ensured a seamless user experience by optimizing apps performance.",
        "Used Hive and Oracle to write queries to collect data and created data models and documented data flows to improve data quality.",
        "Handled missing data, and inconsistencies to maintain data integrity."
    ]
    },
    {
      path:'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      name: 'Software Engineer Associate',
      date: 'May 2022 - Sebtember 2023',
      company: 'Revature',
      location: 'Remote',
      description: [
        "Completed a full stack training and contributed to three enterprise applications:",
        "E-commerce: Designed to provide users with a seamless shopping experience. It allowed users to browse, add and delete items in their cart. Sellers have access to a dashboard to manage their products, inventory, and orders.",
        "Food to Go: Enabled users to order food from local restaurants. Users can login, create and update profile and delivery address, view restaurants, view menus, ordering, and track orders.",
        "Expense Reimbursement: Managed the process of reimbursing employees for expenses incurred while on company time. All employees can login, submit requests and view their past and pending requests. Managers can log in and view all reimbursement requests and approve or deny requests."
      ]
    }
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
