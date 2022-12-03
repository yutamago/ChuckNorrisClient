import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FactService} from "./services/fact.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Fact} from "./models/fact.model";
import {Title} from "@angular/platform-browser";
import {SearchResults} from "./models/search-results.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'Random FACTS about Chuck Norris';
  error?: HttpErrorResponse;

  categories: string[] = [];
  searchEnabled = false;


  constructor(private factService: FactService, private cdr: ChangeDetectorRef, titleService: Title) {
    titleService.setTitle(this.title)
  }

  async ngOnInit(): Promise<void> {
    await this.loadCategories();
  }

  private async loadCategories() {
    try {
      this.categories = await this.factService.getCategories();
      this.cdr.markForCheck();
    } catch(error) {
      const httpError = error as HttpErrorResponse;
      console.error('Failed to load categories!', httpError.error)
    }
  }

  toggleSearch() {
    this.searchEnabled = !this.searchEnabled;
  }
}
