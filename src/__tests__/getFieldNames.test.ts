import { describe, expect, test } from 'vitest';
import { getFieldNames } from '../index';

describe('getFieldNames', () => {
  test('Should return localized field names', () => {
    const names = getFieldNames('de');
    expect(names.month).toBe('Monat');
    expect(names.weekday).toBe('Wochentag');
    expect(names.year).toBe('Jahr');
    expect(Object.keys(names)).toHaveLength(12);
  });

  test('Should support short names', () => {
    expect(getFieldNames('en', 'short').month).toBe('mo.');
  });
});
