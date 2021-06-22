import { assert } from 'chai';
import { emojiMap, checkText } from '../src/index.ts';

describe('test package functions', () => {
  it('should test emoji map', () => {
    const expectedVal = '👋';
    assert(emojiMap['o/'] === expectedVal, 'invalid value :(');
  });

  it('should test awesome function', () => {
    const expectedVal = 'ciao 👋';
    assert(checkText('ciao o/') === expectedVal, 'invalid value :(');
  });
});
