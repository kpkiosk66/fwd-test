import mongoose from "mongoose";
import { quotationProduct } from "../../shared/types";
const Schema = mongoose.Schema;

export interface LogDocument {
  name: string;
  surname: string;
  gender: string;
  dob: string;
  planCode: string;
  premiumPerYear: number;
  paymentFrequency: string;
  cost: quotationProduct;
}

export interface ILogDocument extends LogDocument, mongoose.Document {}

const LogDocumentSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  planCode: { type: String, required: true },
  premiumPerYear: { type: Number, required: true },
  paymentFrequency: { type: String, required: true },
  cost: {
    productId: { type: String },
    productTypeCd: { type: String },
    productFamilyCd: { type: String },
    baseSumAssured: { type: Number },
    baseAnnualPremium: { type: Number },
    productTerm: { type: Number },
    premiumPayingTerm: { type: Number },
    paymentFrequencyCd: { type: String },
    planCode: { type: String },
    annualizedModalPremium: { type: Number },
    modalPremium: { type: Number },
    selected: { type: Boolean },
  },
});

const Log = mongoose.model<ILogDocument>("Log", LogDocumentSchema);

export default Log;
