import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, lastValueFrom, Observable, throwError} from "rxjs";
import {Fact} from "../models/fact.model";
import {SearchResults} from "../models/search-results.model";

@Injectable({
  providedIn: 'root'
})
export class FactService {
  private static readonly BASE_API = 'https://api.chucknorris.io/jokes/';

  constructor(private client: HttpClient) {
  }

  async getRandomFact(category?: string): Promise<Fact> {
    return await lastValueFrom(this.client.get<Fact>(FactService.BASE_API + 'random' + (category ? '?category=' + encodeURIComponent(category) : '')));
  }

  async getCategories(): Promise<string[]> {
    return await lastValueFrom(this.client.get<string[]>(FactService.BASE_API + 'categories'));
  }

  async search(query: string): Promise<SearchResults> {
    return await lastValueFrom(this.client.get<SearchResults>(FactService.BASE_API + 'search?query=' + encodeURIComponent(query)));
  }
}
