[![npm version](https://img.shields.io/npm/v/month-list.svg)](https://www.npmjs.com/package/month-list)
[![CI](https://github.com/pret-a-porter/month-list/actions/workflows/ci.yml/badge.svg)](https://github.com/pret-a-porter/month-list/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlejs/size/month-list)](https://bundlejs.com/?q=month-list)

# month-list

Localized month and weekday names, built on `Intl.DateTimeFormat`. No dependencies, under 300 B.

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

### `getMonthList(locale?, format?)`

Returns the 12 month names, starting from January.

| Parameter | Type                                                      | Default          |
| --------- | --------------------------------------------------------- | ---------------- |
| `locale`  | `string \| string[] \| Intl.Locale`                       | runtime's locale |
| `format`  | `'long' \| 'short' \| 'narrow' \| 'numeric' \| '2-digit'` | `'long'`         |

### `getWeekDays(locale?, format?, firstDay?)`

Returns the 7 weekday names, starting from Monday.

| Parameter  | Type                                         | Default          |
| ---------- | -------------------------------------------- | ---------------- |
| `locale`   | `string \| string[] \| Intl.Locale`          | runtime's locale |
| `format`   | `'long' \| 'short' \| 'narrow'`              | `'long'`         |
| `firstDay` | `1`–`7` (Monday–Sunday) or `true` for Sunday | `1`              |

The types `MonthFormat`, `WeekdayFormat` and `FirstDay` are exported too.

## Examples

```js
import { getMonthList, getWeekDays } from 'month-list';

getMonthList('en');
// ['January', 'February', 'March', ..., 'December']

getMonthList('en', 'short');
// ['Jan', 'Feb', 'Mar', ..., 'Dec']

getMonthList('ru');
// ['январь', 'февраль', 'март', ..., 'декабрь']

getMonthList('ja', 'numeric');
// ['1月', '2月', '3月', ..., '12月']

getWeekDays('en');
// ['Monday', 'Tuesday', ..., 'Sunday']

getWeekDays('en', 'short', true);
// ['Sun', 'Mon', 'Tue', ..., 'Sat']

getWeekDays('de', 'narrow');
// ['M', 'D', 'M', 'D', 'F', 'S', 'S']
```

### Start the week where the locale starts it

`firstDay` uses the same numbering as `Intl.Locale#getWeekInfo()`, so you can pass the locale's own first day straight in:

```js
const locale = new Intl.Locale('ar-EG');
getWeekDays(locale, 'long', locale.getWeekInfo().firstDay);
// starts on Saturday
```

`getWeekInfo()` is not available in every browser yet; fall back to a fixed day where it is missing.

## License

[MIT](./LICENSE)
