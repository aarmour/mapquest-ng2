export interface SearchResult {
  resultNumber: number;
  distance: number;
  sourceName: string;
  name: string;
  shapePoints: number[];
  distanceUnit: 'm' | 'k';
  key: string;
  fields: Object;
}

export interface SearchResultsOptions {
  shapeFormat: 'raw' | 'cmp' | 'cmp6' | 'simple';
  ambiguities: boolean;
  pageSize: number;
  currentPage: number;
  units: 'm' | 'k';
  maxMatches: number;
}

export interface SearchResults {
  resultsCount: number;
  totalPages: number;
  info: Object;
  options: SearchResultsOptions;
  searchResults: SearchResult[];
}
