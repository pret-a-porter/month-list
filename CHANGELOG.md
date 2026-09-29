# Changelog

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
