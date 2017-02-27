export interface SearchAheadPredictionResult {
  id: string;
  displayString: string;
  name: string;
  recordType: string;
  collection: string[];
  mdId: string;
  slug: string;
  language: string;
  place: Object;
}

export interface SearchAheadPredictionResults {
  results: SearchAheadPredictionResult[];
}
