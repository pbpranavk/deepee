import {
  createInvestmentHelper,
  getInvestmentsHelper,
} from "model_helpers/investment_model_helper";
import { MockContext, Context, createMockContext } from "context";

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

test("createInvestment returns an error if title is not provided", async () => {
  const investment = {
    data: {
      title: "",
      content: "This is a test investment",
      journey_id: "1",
    },
  };

  mockCtx.prisma.investment.create.mockImplementation();

  await expect(createInvestmentHelper(investment, ctx)).resolves.toEqual({
    error: new Error("Title is required"),
  });
});

test("createInvestment returns an error if journey_id is not provided", async () => {
  const investment = {
    data: {
      title: "Test investment",
      content: "This is a test investment",
      journey_id: "",
    },
  };

  mockCtx.prisma.investment.create.mockImplementation();

  await expect(createInvestmentHelper(investment, ctx)).resolves.toEqual({
    error: new Error("Journey is required"),
  });
});

test("createInvestment successfully creates an investment", async () => {
  const investment = {
    data: {
      title: "Test investment",
      content: "This is a test investment",
      journey_id: "1",
    },
  };

  const investmentResponse = {
    id: "1",
    title: "Test investment",
    content: "This is a test investment",
    journey_id: "1",
    created_at: new Date(),
    updated_at: new Date(),
  };

  mockCtx.prisma.investment.create.mockResolvedValue(investmentResponse);

  await expect(createInvestmentHelper(investment, ctx)).resolves.toEqual({
    data: investmentResponse,
  });
});

test("getInvestments returns a list of investments", async () => {
  const investmentsResponse = [
    {
      id: "1",
      title: "Test investment",
      content: "This is a test investment",
      journey_id: "1",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: "2",
      title: "Test investment 2",
      content: "This is a test investment 2",
      journey_id: "1",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  mockCtx.prisma.investment.findMany.mockResolvedValue(investmentsResponse);

  await expect(getInvestmentsHelper(ctx)).resolves.toEqual(investmentsResponse);
});
