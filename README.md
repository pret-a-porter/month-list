[![npm version](https://img.shields.io/npm/v/month-list.svg)](https://www.npmjs.com/package/month-list)
[![CI](https://github.com/pret-a-porter/month-list/actions/workflows/ci.yml/badge.svg)](https://github.com/pret-a-porter/month-list/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlejs/size/month-list)](https://bundlejs.com/?q=month-list)

# month-list

Localized month and weekday names, week settings, AM/PM labels and date field names, built on `Intl`. No dependencies; each function is under 250 B minified and compressed, and you only bundle the ones you import.

## How to install

```sh
npm install month-list
```

or

```sh
yarn add month-list
```

Works in Node.js 18+ and every modern browser. Ships both ES modules and CommonJS with TypeScript types.

## API

### `getMonthList(locale?, format?, context?)`

Returns the 12 Gregorian month names, starting from January, in every locale.

| Parameter | Type                                                      | Default          |
| --------- | --------------------------------------------------------- | ---------------- |
| `locale`  | `string \| string[] \| Intl.Locale`                       | runtime's locale |
| `format`  | `'long' \| 'short' \| 'narrow' \| 'numeric' \| '2-digit'` | `'long'`         |
| `context` | `'standalone' \| 'format'`                                | `'standalone'`   |

`'format'` returns the month as written inside a date, which differs in languages with grammatical cases: Russian `января` instead of `январь`, Polish `stycznia` instead of `styczeń`. Where a language writes the month as a number inside dates (Japanese, Chinese), the standalone name is returned.

### `getWeekDays(locale?, format?, firstDay?)`

Returns the 7 weekday names, starting from Monday.

| Parameter  | Type                                         | Default          |
| ---------- | -------------------------------------------- | ---------------- |
| `locale`   | `string \| string[] \| Intl.Locale`          | runtime's locale |
| `format`   | `'long' \| 'short' \| 'narrow'`              | `'long'`         |
| `firstDay` | `1`–`7` (Monday–Sunday) or `true` for Sunday | `1`              |

### `getWeekInfo(locale?)`

Returns `{ firstDay, weekend }` for the locale, with days numbered 1 (Monday) to 7 (Sunday). For example, `en-US` gives `{ firstDay: 7, weekend: [6, 7] }`. Where the runtime has no week data (see [browser support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getWeekInfo#browser_compatibility)), it returns Monday and Saturday–Sunday.

| Parameter | Type                    | Default          |
| --------- | ----------------------- | ---------------- |
| `locale`  | `string \| Intl.Locale` | runtime's locale |

### `getDayPeriods(locale?)`

Returns the locale's labels for the two halves of a 12-hour day, e.g. `['AM', 'PM']` or `['오전', '오후']`.

### `getFieldNames(locale?, format?)`

Returns the locale's names for date and time fields, for use in labels: `era`, `year`, `quarter`, `month`, `weekOfYear`, `weekday`, `day`, `dayPeriod`, `hour`, `minute`, `second` and `timeZoneName`.

| Parameter | Type                                | Default          |
| --------- | ----------------------------------- | ---------------- |
| `locale`  | `string \| string[] \| Intl.Locale` | runtime's locale |
| `format`  | `'long' \| 'short' \| 'narrow'`     | `'long'`         |

### Types

`MonthFormat`, `WeekdayFormat`, `MonthContext`, `DayNumber`, `FirstDay`, `WeekInfo` and `DateTimeField` are exported.

## Examples

```js
import {
  getDayPeriods,
  getFieldNames,
  getMonthList,
  getWeekDays,
  getWeekInfo,
} from 'month-list';

getMonthList('en');
// ['January', 'February', 'March', ..., 'December']

getMonthList('en', 'short');
// ['Jan', 'Feb', 'Mar', ..., 'Dec']

getMonthList('ru');
// ['январь', 'февраль', 'март', ..., 'декабрь']

getMonthList('ja', 'numeric');
// ['1月', '2月', '3月', ..., '12月']

getMonthList('ru', 'long', 'format');
// ['января', 'февраля', 'марта', ..., 'декабря']

getWeekDays('en');
// ['Monday', 'Tuesday', ..., 'Sunday']

getWeekDays('en', 'short', true);
// ['Sun', 'Mon', 'Tue', ..., 'Sat']

getWeekDays('de', 'narrow');
// ['M', 'D', 'M', 'D', 'F', 'S', 'S']

getWeekInfo('ar-EG');
// { firstDay: 6, weekend: [5, 6] }

getDayPeriods('ja');
// ['午前', '午後']

getFieldNames('de').month;
// 'Monat'
```

### Start the week where the locale starts it

```js
const { firstDay } = getWeekInfo('en-US');
getWeekDays('en-US', 'short', firstDay);
// ['Sun', 'Mon', 'Tue', ..., 'Sat']
```

## License

[MIT](./LICENSE)
