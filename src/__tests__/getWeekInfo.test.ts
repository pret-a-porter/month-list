import { afterEach, describe, expect, test } from 'vitest';
import { getWeekDays, getWeekInfo } from '../index';

const proto = Intl.Locale.prototype;
const original = {
  getWeekInfo: Object.getOwnPropertyDescriptor(proto, 'getWeekInfo'),
  weekInfo: Object.getOwnPropertyDescriptor(proto, 'weekInfo'),
};

// Simulates engines that lack one or both week info APIs.
const stub = (key: keyof typeof original, value?: unknown) =>
  Object.defineProperty(proto, key, {
    configurable: true,
    get: () => value,
  });

describe('getWeekInfo', () => {
  afterEach(() => {
    for (const [key, descriptor] of Object.entries(original)) {
      if (descriptor) Object.defineProperty(proto, key, descriptor);
    }
  });

  test('Should return the first day and weekend of a locale', () => {
    expect(getWeekInfo('en-US')).toEqual({ firstDay: 7, weekend: [6, 7] });
    expect(getWeekInfo('de')).toEqual({ firstDay: 1, weekend: [6, 7] });
    expect(getWeekInfo(new Intl.Locale('ar-EG'))).toEqual({
      firstDay: 6,
      weekend: [5, 6],
    });
  });

  test('Should work with getWeekDays', () => {
    const { firstDay } = getWeekInfo('en-US');
    expect(getWeekDays('en-US', 'short', firstDay)[0]).toBe('Sun');
  });

  test('Should use the default locale when none is given', () => {
    expect(getWeekInfo()).toEqual(
      getWeekInfo(new Intl.DateTimeFormat().resolvedOptions().locale),
    );
  });

  test('Should read the weekInfo getter on older engines', () => {
    stub('getWeekInfo');
    stub('weekInfo', { firstDay: 6, weekend: [5, 6] });
    expect(getWeekInfo('ar-EG')).toEqual({ firstDay: 6, weekend: [5, 6] });
  });

  test('Should fall back to Monday and Saturday–Sunday without week data', () => {
    stub('getWeekInfo');
    stub('weekInfo');
    expect(getWeekInfo('en-US')).toEqual({ firstDay: 1, weekend: [6, 7] });
  });
});
