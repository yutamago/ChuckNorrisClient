import {ChangeDetectorRef, Component} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FactService} from "../../services/fact.service";
import {SearchResults} from "../../models/search-results.model";

@Component({
  selector: 'app-search-fact',
  templateUrl: './search-fact.component.html',
  styleUrls: ['./search-fact.component.scss']
})
export class SearchFactComponent {
  searchInput = '';
  searchResults?: SearchResults;
  error?: string;

  constructor(private factService: FactService, private cdr: ChangeDetectorRef) {}

  async search() {
    if(!this.isSearchInputValid) {
      this.error = 'You gotta enter something before you can search, duh!';
      return;
    }

    try {
      this.searchResults = await this.factService.search(this.searchInput);
      this.error = undefined;
      this.cdr.markForCheck();
    } catch(error) {
      this.error = 'Chuck Norris broke your internet! Try again later!';
      this.cdr.markForCheck();
    }
  }

  get isSearchInputValid(): boolean {
    return this.searchInput.trim().length > 0;
  }
}
