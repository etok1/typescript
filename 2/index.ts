class Hotel {
  private freeNumberRooms: number;
  constructor(freeNumberRooms: number) {
    this.freeNumberRooms = freeNumberRooms;
  }

  public bookRoom(): void {
    this.freeNumberRooms--;
    console.log(this.freeNumberRooms);
  }

  public isRoomFree(): boolean {
    return this.freeNumberRooms > 0;
  }
}

const hotel: Hotel = new Hotel(2);
console.log(hotel.isRoomFree());
hotel.bookRoom();

console.log(hotel.isRoomFree());
hotel.bookRoom();

console.log(hotel.isRoomFree());
