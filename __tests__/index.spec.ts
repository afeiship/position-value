import positionValue from '../src';

describe('api.basic', () => {
  test('normail single value case', () => {
    expect(positionValue({ rel: true })).toBe('relative');
    expect(positionValue({ abs: true })).toBe('absolute');
    expect(positionValue({ fixed: true })).toBe('fixed');
    expect(positionValue({ sticky: true })).toBe('sticky');
    expect(positionValue({ fixed: false })).toBe(null);
  });
});
