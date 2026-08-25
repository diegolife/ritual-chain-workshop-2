export type ExportMarket = {
  id: bigint;
  question: string;
  yes: bigint;
  no: bigint;
  resolved: boolean;
  result?: string;
};

export function marketHeader(
  market: ExportMarket,
): string {
  return `Market #${market.id}`;
}

export function marketLines(
  market: ExportMarket,
): string[] {
  const lines: string[] = [];

  lines.push(
    marketHeader(market),
  );

  lines.push(
    `Question: ${market.question}`,
  );

  lines.push(
    `YES: ${market.yes}`,
  );

  lines.push(
    `NO: ${market.no}`,
  );

  lines.push(
    `Resolved: ${market.resolved}`,
  );

  if (market.result) {
    lines.push(
      `Result: ${market.result}`,
    );
  }

  return lines;
}

export function exportMarket(
  market: ExportMarket,
): string {
  return marketLines(market)
    .join("\n");
}

export function exportMarkets(
  markets: ExportMarket[],
): string {
  return markets
    .map(exportMarket)
    .join("\n\n");
}

export function addTitle(
  title: string,
  content: string,
): string {
  return [
    title,
    "=".repeat(title.length),
    content,
  ].join("\n");
}
