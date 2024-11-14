export class Floor {
    id: number;
    name: string;

    rooms: Room[];
}

export class Room {
    id: number;
    name: string;
    link: string;
    imgUrl: string;
}