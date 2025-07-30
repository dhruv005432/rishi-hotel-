import { Component } from '@angular/core';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomComponent {
  selectedRoom: Room | null = null;

  rooms: Room[] = [
    {
      id: 1,
      name: 'Deluxe Room',
      image: 'assets/deluxe.webp',
      price: 2500,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 2,
      name: 'Executive Suite',
      image: 'assets/executive.webp',
      price: 3500,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 3,
      name: 'Standard Room',
      image: 'assets/standard.jpeg',
      price: 1800,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 4,
      name: 'Luxury Suite',
      image: 'assets/luxury.webp',
      price: 5000,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 5,
      name: 'Family Room',
      image: 'assets/family.webp',
      price: 3000,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 6,
      name: 'Couple Room',
      image: 'assets/couple.webp',
      price: 2800,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 7,
      name: 'Business Suite',
      image: 'assets/business.jpeg',
      price: 4200,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 8,
      name: 'Presidential Suite',
      image: 'assets/presidential.jpeg',
      price: 9000,
      features: ['Wi-Fi', 'AC', 'TV']
    },
    {
      id: 9,
      name: 'Budget Room',
      image: 'assets/budget.jpg',
      price: 1500,
      features: ['Wi-Fi', 'TV']
    },
    {
      id: 10,
      name: 'Single Room',
      image: 'assets/single.jpeg',
      price: 1200,
      features: ['Wi-Fi', 'TV']
    }
  ];

  openDetails(room: Room) {
    this.selectedRoom = room;
  }

  closeDetails() {
    this.selectedRoom = null;
  }
}
