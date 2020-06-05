const year = new Date().getFullYear();
const monthList = [...Array(12).keys()];

export function getMonthList(
  locales?: string | string[],
  format: "long" | "short" = "long"
): string[] {
  const formatter = new Intl.DateTimeFormat(locales, {
    month: format,
  });

  return monthList.map((monthIndex: number) =>
    formatter.format(new Date(year, monthIndex))
  );
}
