import { expect } from "chai";

import {
  marketHeader,
  marketLines,
  exportMarket,
  exportMarkets,
  addTitle,
} from "../utils/text-export";

describe("text export", function () {
  const market = {
    id: 21n,
    question:
      "Will ETH reach the target?",
    yes: 14n,
    no: 6n,
    resolved: true,
    result: "YES",
  };

  it("creates a market header", function () {
    expect(
      marketHeader(market),
    ).to.equal(
      "Market #21",
    );
  });

  it("creates multiple lines", function () {
    expect(
      marketLines(market),
    ).to.have.length(6);
  });

  it("includes the question", function () {
    expect(
      exportMarket(market),
    ).to.contain(
      "Will ETH reach the target?",
    );
  });

  it("includes the result", function () {
    expect(
      exportMarket(market),
    ).to.contain(
      "Result: YES",
    );
  });

  it("exports multiple markets", function () {
    const second = {
      ...market,
      id: 22n,
    };

    const output =
      exportMarkets([
        market,
        second,
      ]);

    expect(
      output,
    ).to.contain(
      "Market #21",
    );

    expect(
      output,
    ).to.contain(
      "Market #22",
    );
  });

  it("adds a title", function () {
    const result =
      addTitle(
        "Workshop Results",
        "example",
      );

    expect(result)
      .to.contain(
        "Workshop Results",
      );

    expect(result)
      .to.contain(
        "example",
      );
  });
});
