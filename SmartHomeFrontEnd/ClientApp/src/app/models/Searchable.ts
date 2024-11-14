export class Searchable {
  filterCategories: FilterCategory[];


  constructor() {
    this.filterCategories = [];
  }

  addKeyword(filterCategory: FilterCategory) {
    this.filterCategories.push(filterCategory);
  }
}

export class FilterCategory {
  keywords: Keyword[];
  category: string;

  constructor(category: string, keywords: Keyword[]) {
    this.keywords = keywords;
    this.category = category;
  }
}

export class Keyword {
  keyword: string;
  selected: boolean;

  constructor(keyword: string, selected: boolean = false) {
    this.keyword = keyword;
    this.selected = selected;
  }
}
