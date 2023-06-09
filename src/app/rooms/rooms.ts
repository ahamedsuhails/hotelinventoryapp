export interface Room {
  availableRooms: number;
  bookedRooms: number;
  totalRooms: number;
}

export interface RoomDetails {
  roomNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
}
