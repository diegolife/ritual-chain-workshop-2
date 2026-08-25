import {
  exportMarkets,
  addTitle,
} from "../utils/text-export";

const markets = [
  {
    id: 1n,
    question:
      "Will ETH reach the target?",
    yes: 14n,
    no: 6n,
    resolved: true,
    result: "YES",
  },
  {
    id: 2n,
    question:
      "Will BTC stay above the target?",
    yes: 5n,
    no: 11n,
    resolved: true,
    result: "NO",
  },
  {
    id: 3n,
    question:
      "Will the market resolve?",
    yes: 9n,
    no: 9n,
    resolved: false,
  },
];

const content =
  exportMarkets(markets);

const output =
  addTitle(
    "Ritual Workshop Markets",
    content,
  );

console.log(output);

console.log("");

console.log(
  "Export complete.",
);

console.log(
  `Markets exported: ${markets.length}`,
);

console.log(
  "This output is intended for quick inspection.",
);

console.log(
  "It can also be copied into a text file.",
);
