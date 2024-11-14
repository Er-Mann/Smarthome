import {BaseTile} from "./BaseTile";
import {FilterCategory} from "../Searchable";

export class AnimatedTile extends BaseTile {
  streamingUrl: string;

  constructor(name: string, description: string, imageUrl: string, referenceTo: string, streamingUrl: string, pinned: boolean = false, keywords: FilterCategory[] = []) {
    console.log(keywords);
    super(name, description, imageUrl, referenceTo, pinned, keywords);
    this.streamingUrl = streamingUrl;
  }

  isStreamSet(): boolean {
    return this.streamingUrl && this.streamingUrl.length > 0;
  }
}
