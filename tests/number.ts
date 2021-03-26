import * as N from '../src/number';
import * as fc from 'fast-check';

describe('number', () => {
  describe('zero', () => {
    it('is zero', () => {
      expect(N.zero).toBe(0);
    });
  });
});
