import {Injectable} from '@angular/core';
import {FilterCategory, Keyword, Searchable} from "../../../models/Searchable";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FilterService {

  filterCategories: FilterCategory[] = [];
  filterChangedSubject = new Subject();

  constructor() {
    console.log("Filter Service init");
  }

  prepareFilter(items: Searchable[]) {
    this.filterCategories = [];
    items.forEach(item => {
      item.filterCategories.forEach(filterCategory => {
        if (this.filterCategories.map(it => it.category).includes(filterCategory.category)) {
          // category already exists -> add missing keywords to category
          filterCategory.keywords.forEach(newKeyword => {
            if (this.filterCategories.filter(it => it.category == filterCategory.category)[0].keywords.map(
              it => it.keyword).includes(newKeyword.keyword)) {
              // element already exists
            } else {
              this.filterCategories.filter(it => it.category == filterCategory.category)[0].keywords.push(newKeyword);
            }
          });
        } else {
          // category does not exist yet
          let newKeywordList: Keyword[] = [];
          filterCategory.keywords.forEach(it => newKeywordList.push(it));
          this.filterCategories.push(new FilterCategory(filterCategory.category, newKeywordList)); //maybe check for double keywords
        }
      });
    });
  }

  private areAnyItemsSelected(): boolean {
    let anySelected = false;
    this.filterCategories.forEach(category => {
      category.keywords.forEach(keyword => {
        if (keyword.selected) {
          console.log("At least one item is selected");
          anySelected = true;
        }
      });
    });
    return anySelected;
  }

  getFilteredItems<T extends Searchable>(fullList: T[]): T[] {
    console.log("Filter Items called: " + fullList.length);
    let filteredItems: T[] = [];

    fullList.forEach(item => {
      console.log(item);
      item.filterCategories.forEach(category => {
        category.keywords.forEach(keyword => {
          this.filterCategories.filter(it => it.category == category.category).forEach(filterCategory => {
            filterCategory.keywords.filter(it => it.selected).forEach(selectedKeyword => {
              if (keyword.keyword == selectedKeyword.keyword && !filteredItems.some(fItem => fItem === item)) {
                filteredItems.push(item);
              }
            });
          });
        });
      });
    });

    return this.areAnyItemsSelected() ? filteredItems : fullList;
  }

  filterChanged() {
    this.filterChangedSubject.next()
  }
}
