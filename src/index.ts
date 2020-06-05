const Y = new Date().getFullYear();
const L = [...Array(12).keys()];

export const getMonthList = (l?: string | string[], f?: string): string[] =>
  L.map((i: number) =>
    new Intl.DateTimeFormat(l, {
      month: f || "long",
    }).format(new Date(Y, i))
  );
