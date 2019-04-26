interface IConvertTypeToInt {
  choosen: string;
  value1: string;
  value2: string;
}

export const convertTypeToInt = (params: any) => {
  const { choosen, value1, value2 } = params;
  const c1 = parseInt(choosen, 10);
  const c2 = parseInt(value1, 10);
  const c3 = parseInt(value2, 10);

  return {c1, c2, c3};
};
