export function formatCurrencyPtBr(value: number): string {
  const valueFormatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valueFormatted;
}
