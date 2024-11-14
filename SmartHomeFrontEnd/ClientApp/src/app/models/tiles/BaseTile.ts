import {FilterCategory, Searchable} from "../Searchable";
import { v4 as uuid } from 'uuid';

export class BaseTile extends Searchable {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  referenceTo: string;
  pinned: boolean;

  constructor(name: string, description: string, imageUrl: string, referenceTo: string, pinned: boolean = false, categories: FilterCategory[] = []) {
    super();
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.referenceTo = referenceTo;
    this.pinned = pinned;

    this.filterCategories = categories;
  }

  hasDescription(): boolean {
    return this.description && this.description.length > 0;
  }
}
