import { describe, expect, test } from 'vitest';
import { getDayPeriods } from '../index';

describe('getDayPeriods', () => {
  test('Should return AM and PM labels', () => {
    expect(getDayPeriods('en')).toEqual(['AM', 'PM']);
    expect(getDayPeriods('ko')).toEqual(['오전', '오후']);
    expect(getDayPeriods('zh')).toEqual(['上午', '下午']);
  });

  test('Should return labels for locales that use a 24-hour clock', () => {
    expect(getDayPeriods('de')).toHaveLength(2);
    expect(getDayPeriods('de').every(Boolean)).toBe(true);
  });
});
