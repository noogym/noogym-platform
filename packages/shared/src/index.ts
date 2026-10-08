export const CurrentStudentsRange = {
  UP_TO_100: "UP_TO_100",
  FROM_101_TO_300: "FROM_101_TO_300",
  FROM_301_TO_500: "FROM_301_TO_500",
  FROM_501_TO_1000: "FROM_501_TO_1000",
  MORE_THAN_1000: "MORE_THAN_1000",
} as const;

export type CurrentStudentsRange =
  (typeof CurrentStudentsRange)[keyof typeof CurrentStudentsRange];

export const UnitsRange = {
  ONE: "ONE",
  TWO_TO_THREE: "TWO_TO_THREE",
  FOUR_TO_TEN: "FOUR_TO_TEN",
  MORE_THAN_TEN: "MORE_THAN_TEN",
} as const;

export type UnitsRange = (typeof UnitsRange)[keyof typeof UnitsRange];

export const MainChallenge = {
  LATE_PAYMENTS: "LATE_PAYMENTS",
  ACCESS_CONTROL: "ACCESS_CONTROL",
  LACK_OF_REPORTS: "LACK_OF_REPORTS",
  STUDENT_MANAGEMENT: "STUDENT_MANAGEMENT",
  STUDENT_RETENTION: "STUDENT_RETENTION",
  OTHER: "OTHER",
} as const;

export type MainChallenge =
  (typeof MainChallenge)[keyof typeof MainChallenge];

export const LeadStatus = {
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  DEMO_SCHEDULED: "DEMO_SCHEDULED",
  PROPOSAL_SENT: "PROPOSAL_SENT",
  WON: "WON",
  LOST: "LOST",
} as const;

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];

export type CreateDemoRequestPayload = {
  fullName: string;
  gymName: string;
  whatsapp: string;
  email?: string | null;
  city: string;
  currentStudentsRange: CurrentStudentsRange;
  unitsRange?: UnitsRange | null;
  mainChallenge: MainChallenge;
  message?: string | null;
  source?: string | null;
  campaign?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmContent?: string | null;
  utmTerm?: string | null;
  turnstileToken: string;
};
