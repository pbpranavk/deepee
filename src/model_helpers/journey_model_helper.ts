import { Context } from "context";
import { Prisma } from "@prisma/client";

export const createJourneyHelper = async (
  journey: Prisma.JourneyCreateArgs,
  ctx: Context
): Promise<{ data?: any; error?: any }> => {
  if (!journey?.data?.title) {
    return { error: new Error("Title is required") };
  }

  return {
    data: await ctx.prisma.journey.create({
      data: {
        title: journey.data.title,
      },
    }),
  };
};

export const getJourneysHelper = async (ctx: Context) => {
  return await ctx.prisma.journey.findMany();
};
