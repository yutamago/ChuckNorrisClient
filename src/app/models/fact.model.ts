export interface Fact {
  id: string;
  created_at: Date;
  updated_at: Date;
  value: string;
  icon_url: string;
  url: string;

  categories: string[];
}
