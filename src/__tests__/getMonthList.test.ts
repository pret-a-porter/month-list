import { getMonthList } from '../index';

describe('getMonthList', () => {
  test('Should return list of month names', () => {
    expect(getMonthList('en')).toEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]);
  });

  test('Should return list of short month names', () => {
    expect(getMonthList('en', 'short')).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });
});
