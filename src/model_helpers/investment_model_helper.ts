import { Context } from "context";
import { Prisma } from "@prisma/client";

export const createInvestmentHelper = async (
  investment: Prisma.InvestmentCreateArgs,
  ctx: Context
): Promise<{ data?: any; error?: any }> => {
  if (!investment.data.title) {
    return { error: new Error("Title is required") };
  }
  if (!investment.data.journey_id) {
    return { error: new Error("Journey is required") };
  }

  return {
    data: await ctx.prisma.investment.create({
      data: {
        title: investment.data.title,
        content: investment.data.content,
        journey_id: investment.data.journey_id,
      },
    }),
  };
};

export const getInvestmentsHelper = async (ctx: Context) => {
  return await ctx.prisma.investment.findMany();
};
