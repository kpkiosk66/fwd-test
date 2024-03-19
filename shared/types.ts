interface UserData {
  name: string;
  surname: string;
  gender: string;
  dob: string;
  planCode: string;
  premiumPerYear: number;
  paymentFrequency: string;
}

interface CostData {
  cost: number;
}

interface quotationProduct {
  productId: string;
  productTypeCd: string;
  productFamilyCd: string;
  baseSumAssured: number;
  baseAnnualPremium: number;
  productTerm: number;
  premiumPayingTerm: number;
  paymentFrequencyCd: string;
  planCode: string;
  annualizedModalPremium: number;
  modalPremium: number;
  selected: boolean;
}

export type { UserData, CostData, quotationProduct };
