import { afterEach, describe, expect, test } from 'vitest';
import { getMonthList, getWeekDays } from '../index';

const originalTz = process.env.TZ;
const timezones = [
  'UTC',
  'Pacific/Kiritimati',
  'Pacific/Pago_Pago',
  'America/St_Johns',
  'Asia/Kathmandu',
  'Europe/Moscow',
];

describe.each(timezones)('in %s', (tz) => {
  afterEach(() => {
    process.env.TZ = originalTz;
  });

  test('Should not shift months or week days', () => {
    process.env.TZ = tz;
    expect(getMonthList('en', 'short')[0]).toBe('Jan');
    expect(getMonthList('en', 'short')[11]).toBe('Dec');
    expect(getWeekDays('en', 'short')[0]).toBe('Mon');
    expect(getWeekDays('en', 'short', true)[0]).toBe('Sun');
  });
});
