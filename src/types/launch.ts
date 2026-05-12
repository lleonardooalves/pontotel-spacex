export interface LaunchPatch {
  small: string | null;
  large: string | null;
}

export interface LaunchLinks {
  patch: LaunchPatch;
  webcast: string | null;
  article: string | null;
  wikipedia: string | null;
}

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  flight_number: number;
  upcoming: boolean;
  links: LaunchLinks;
}
