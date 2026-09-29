[![npm version](https://badge.fury.io/js/month-list.svg)](https://badge.fury.io/js/month-list)

# month-list

Module exports two functions `getMonthList` and `getWeekDays`

Function returns month list in your locale;

## How to install

```sh
npm install month-list --save
```

or

```sh
yarn add month-list
```

## Examples

🇬🇧 `getMonthList('en')` will return:

```text
January
February
March
April
May
June
July
August
September
October
November
December
```

🇬🇧 `getMonthList('en', 'short')` will return:

```text
Jan
Feb
Mar
Apr
May
Jun
Jul
Aug
Sep
Oct
Nov
Dec
```

🇬🇧 `getWeekDays('en')` will return:

```text
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
```

🇬🇧 `getWeekDays('en', 'long', true)` will return:

```text
Sunday
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
```

🇬🇧 `getWeekDays('en', 'short')` will return:

```text
Mon
Tue
Wed
Thu
Fri
Sat
Sun
```

🇬🇧 `getWeekDays('en', 'narrow')` will return:

```text
M
T
W
T
F
S
S
```
