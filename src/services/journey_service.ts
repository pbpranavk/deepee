import supabase from "supabaseClient";
import { Context, createContext } from "context";
import { Prisma } from "@prisma/client";

import { createJourneyHelper } from "model_helpers/journey_model_helper";

export const createJourney = async (
  journey: Prisma.JourneyCreateArgs
): Promise<{ data?: any; error: any }> => {
  const ctx: Context = createContext();

  const { data, error } = await createJourneyHelper(journey, ctx);
  return { data, error };
};

export const getJourneys = async () => {
  const { data, error } = await supabase.from("Journey").select("*");

  return { data, error };
};
