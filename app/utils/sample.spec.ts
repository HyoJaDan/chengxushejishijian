import { describe, it } from 'vitest';
import { hello } from './sample';

describe('sample', () => {
  it('should work', () => {
    hello();
  });
});
