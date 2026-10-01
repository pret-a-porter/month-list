# Changelog

## 2.1.0

### Features

- `getMonthList` takes a third argument, `context`. `'format'` returns month names as written inside a date, e.g. Russian `января` instead of `январь`.
- `getWeekInfo(locale)` returns the locale's first day of the week and weekend days, ready to pass to `getWeekDays`.
- `getDayPeriods(locale)` returns the AM/PM labels, e.g. `['午前', '午後']` in Japanese.
- `getFieldNames(locale, format)` returns localized names of date and time fields such as "month" and "weekday".
- New exported types: `MonthContext`, `DayNumber`, `WeekInfo` and `DateTimeField`.

## 2.0.1

- Fix `getMonthList` for locales whose default calendar is not Gregorian. `getMonthList('fa')` used to start from دی (a Persian month), and `he-u-ca-hebrew` repeated a month. It now always returns the Gregorian months January to December.
- Add a package description for npm.

## 2.0.0

### Breaking changes

- Requires Node.js 18 or later.
- The package now has an `exports` map. Deep imports such as `month-list/lib/index` no longer work; import from `month-list`.
- The build output changed from `lib/index.js` to `lib/index.mjs` (ESM) and `lib/index.cjs` (CommonJS).

### Features

- ES module build alongside CommonJS, with types for both.
- `getWeekDays` accepts a first day of the week from `1` (Monday) to `7` (Sunday), matching `Intl.Locale#getWeekInfo().firstDay`. `true` still means Sunday.
- `locale` accepts `Intl.Locale` objects.
- Exported `MonthFormat`, `WeekdayFormat` and `FirstDay` types.

### Improvements

- Output targets ES2018 instead of ES5 and is smaller.
- The date formatter is created once per call instead of once per item.

## 1.0.6

- Last 1.x release.
