import supabase from "supabaseClient";
import { Context, createContext } from "context";
import { Prisma } from "@prisma/client";

import { createInvestmentHelper } from "model_helpers/investment_model_helper";

export const createInvestment = async (
  investment: Prisma.InvestmentCreateArgs
): Promise<{ data?: any; error: any }> => {
  const ctx: Context = createContext();

  const { data, error } = await createInvestmentHelper(investment, ctx);
  return { data, error };
};

export const getInvestments = async () => {
  const { data, error } = await supabase.from("Investment").select("*");

  return { data, error };
};
