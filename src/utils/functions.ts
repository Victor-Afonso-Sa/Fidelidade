export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

export const formatBigNumbers = (num?: number) =>{
  return num && num > 9 ? "+9" : num;
}