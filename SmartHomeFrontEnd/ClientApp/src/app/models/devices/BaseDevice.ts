import {Searchable} from "../Searchable";
import { v4 as uuid } from 'uuid';

/**
 * Should not be used directly -> Use a Sensor or Actuator implementation instead
 */
export class BaseDevice extends Searchable {
  id: number;
  name: string;

  constructor(name: string) {
    super();
    this.id = uuid();
    this.name = name;
  }
}
