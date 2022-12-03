import {Fact} from "./fact.model";

export interface SearchResults {
  total: number,
  result: Fact[];
}
