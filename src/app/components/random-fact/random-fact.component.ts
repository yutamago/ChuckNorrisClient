import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Fact} from "../../models/fact.model";
import {FactService} from "../../services/fact.service";

@Component({
  selector: 'app-random-fact',
  templateUrl: './random-fact.component.html',
  styleUrls: ['./random-fact.component.scss']
})
export class RandomFactComponent implements OnInit {
  error?: string;
  fact?: Fact;
  selectedCategory?: string;

  @Input() categories: string[] = [];

  constructor(private factService: FactService, private cdr: ChangeDetectorRef) {}

  async ngOnInit(): Promise<void> {
    await this.loadRandomFact();
  }

  async loadRandomFact() {
    try {
      this.fact = await this.factService.getRandomFact(this.selectedCategory);
      this.error = undefined;
      this.cdr.markForCheck();
    } catch(error) {
      this.error = 'Chuck Norris broke your internet! Try again later!';
      this.cdr.markForCheck();
    }
  }



}
