import { getWeekDays } from '../index';

describe('getWeekDays', () => {
  test('Should return list of week days', () => {
    expect(getWeekDays('ru')).toEqual([
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]);
  });

  test('Should return list of short week days', () => {
    expect(getWeekDays('en', 'short')).toEqual([
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sun',
    ]);
  });

  test('Should return list of narrow week days', () => {
    expect(getWeekDays('en', 'narrow')).toEqual([
      'M',
      'T',
      'W',
      'T',
      'F',
      'S',
      'S',
    ]);
  });
});
