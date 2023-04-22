import { Component, OnInit } from '@angular/core';
import { Room, RoomDetails } from './rooms';

@Component({
  selector: 'hotelapp-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Taj Vivanta';
  noOfRooms = 100;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomsList: RoomDetails[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'AC, Wifi, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/JIUjvqe2ZHg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Executive Room',
      amenities:
        'AC, Wifi, Bathroom, Kitchen, Bath-tub, Water Geyser, Indoor Pool',
      price: 5000,
      photos: 'https://unsplash.com/photos/JIUjvqe2ZHg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Villa',
      amenities: 'AC, Wifi, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/JIUjvqe2ZHg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
