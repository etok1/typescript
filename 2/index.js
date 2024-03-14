var Hotel = /** @class */ (function () {
    function Hotel(freeNumberRooms) {
        this.freeNumberRooms = freeNumberRooms;
    }
    Hotel.prototype.bookRoom = function () {
        this.freeNumberRooms--;
        console.log(this.freeNumberRooms);
    };
    Hotel.prototype.isRoomFree = function () {
        return this.freeNumberRooms > 0;
    };
    return Hotel;
}());
var hotel = new Hotel(2);
console.log(hotel.isRoomFree);
hotel.bookRoom();
console.log(hotel.isRoomFree());
hotel.bookRoom();
console.log(hotel.isRoomFree());
