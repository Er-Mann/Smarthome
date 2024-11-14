import {BaseTile} from "./tiles/BaseTile";
import { v4 as uuid } from 'uuid';

export class Floor {
  id: string;
  name: string;
  rooms: BaseTile[];


  constructor(name: string, rooms: BaseTile[]) {
    this.id = uuid();
    this.name = name;
    this.rooms = rooms;
  }
}
