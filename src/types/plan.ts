export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  personalAccounts: number;
  patientLimit: number;
  paypalPlanId: string;
  paypalUrl: string;
  features: string[];
  popular?: boolean;
}
