export const createData = (
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) => {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [{ date: '202', customerId: '110', amount: 3 }],
  };
};
