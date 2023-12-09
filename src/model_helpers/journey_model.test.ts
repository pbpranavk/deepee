import {
  createJourneyHelper,
  getJourneysHelper,
} from "model_helpers/journey_model_helper";
import { MockContext, Context, createMockContext } from "context";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test("createJourney returns an error if title is not provided", async () => {
  const journey = {
    data: {
      title: "",
    },
  };

  mockCtx.prisma.journey.create.mockImplementation();

  await expect(createJourneyHelper(journey, ctx)).resolves.toEqual({
    error: new Error("Title is required"),
  });
});

test("createJourney successfully creates a journey", async () => {
  const journey = {
    data: {
      title: "Test journey",
    },
  };

  const journeyResponse = {
    id: "1",
    title: "Test journey",
    created_at: new Date(),
    updated_at: new Date(),
  };

  mockCtx.prisma.journey.create.mockResolvedValue(journeyResponse);

  await expect(createJourneyHelper(journey, ctx)).resolves.toEqual({
    data: journeyResponse,
  });
});

test("getJourneys successfully returns all journeys", async () => {
  const journeysResponse = [
    {
      id: "1",
      title: "Test journey",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  mockCtx.prisma.journey.findMany.mockResolvedValue(journeysResponse);

  await expect(getJourneysHelper(ctx)).resolves.toEqual(journeysResponse);
});
