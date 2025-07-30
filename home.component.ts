import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredRooms = [
    {
      name: 'Deluxe Room',
      description: 'Spacious room with sea view and king-sized bed.',
      image: 'assets/deluxe.webp'
    },
    {
      name: 'Executive Suite',
      description: 'Luxury suite with private balcony and lounge.',
      image: 'assets/executive.webp'
    },
    {
      name: 'Family Room',
      description: 'Comfortable room perfect for families and groups.',
      image: 'assets/family.webp'
    }
  ];

  testimonials = [
    {
      name: 'Ravi Patel',
      message: 'Fantastic stay! Very clean and the staff were very friendly.'
    },
    {
      name: 'Anjali Mehta',
      message: 'Great location and amazing food. Highly recommended!'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToBookNow(): void {
    this.router.navigate(['/booking']);
  }
}
