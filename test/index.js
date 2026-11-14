import { assert } from 'chai';
import { describe, it } from 'mocha';

import {
  emojiMap,
  checkText,
  checkTextWithAutoSuggestions,
  fromUnicodeToEmoji,
  checkTextWithAutoSuggestionsAndUnicode,
} from '../src/index.ts';

describe('test package functions', () => {
  it('should test emoji map', () => {
    const expectedVal = '👋';
    assert(emojiMap['o/'] === expectedVal, 'invalid value :(');
  });

  it('should test basic function', () => {
    const expectedVal = 'ciao 👋';
    assert(checkText('ciao o/') === expectedVal, 'invalid value :(');
  });

  it('should test checkText avoid reserved keyword', () => {
    const expectedVal = 'constructor';
    assert(checkText('constructor') === expectedVal, 'invalid value :(');
  });

  it('should test checkText with initial new line', () => {
    const expectedVal = '😊';
    assert(checkText('\n:)') === expectedVal, 'invalid value :(');
  });

  it('should test checkText with middle new line and no smiles', () => {
    const expectedVal = 'ciao\nciao';
    assert(checkText(expectedVal) === expectedVal, 'invalid value :(');
  });

  it('should test autosuggestion function - working case', () => {
    const expectedVal = 'ciao 😐';
    assert(checkTextWithAutoSuggestions('ciao :neu') === expectedVal, 'invalid value :(');
  });

  it('should test autosuggestion function and avoid reserved keyword', () => {
    const expectedVal = 'constructor';
    assert(checkTextWithAutoSuggestions('constructor') === expectedVal, 'invalid value :(');
  });

  it('should test autosuggestion function - not working case', () => {
    const expectedVal = 'ciao :cat';
    assert(checkTextWithAutoSuggestions('ciao :cat') === expectedVal, 'invalid value :(');
  });

  it('should test autosuggestion function - mixed case', () => {
    const expectedVal = 'ciao 🐱 :cat 🐈 ciao :sweat';
    assert(checkTextWithAutoSuggestions('ciao :cat: :cat :cat2: ciao :sweat') === expectedVal, 'invalid value :(');
  });

  it('should test fromUnicodeToEmoji function', () => {
    const expectedVal = '👿';
    assert(fromUnicodeToEmoji('1f47f') === expectedVal, 'invalid value :(');
  });

  it('should test fromUnicodeToEmoji with multi code point sequences', () => {
    assert(fromUnicodeToEmoji('0031-20e3') === '\u0031\u20e3', 'invalid keycap value :(');
    assert(
      fromUnicodeToEmoji('1f469-200d-2764-fe0f-200d-1f469') === '👩‍❤️‍👩',
      'invalid ZWJ sequence value :(',
    );
  });

  it('should test checkTextWithAutoSuggestionsAndUnicode with multi code point sequences', () => {
    assert(checkTextWithAutoSuggestionsAndUnicode(':one:') === '\u0031\u20e3', 'invalid keycap value :(');
    assert(checkTextWithAutoSuggestionsAndUnicode(':woman-heart-woman:') === '👩‍❤️‍👩', 'invalid ZWJ value :(');
  });

  it('should test checkTextWithAutoSuggestionsAndUnicode and avoid reserved keyword', () => {
    const expectedVal = 'constructor';
    assert(checkTextWithAutoSuggestionsAndUnicode('constructor') === expectedVal, 'invalid value :(');
  });

  it('should test checkTextWithAutoSuggestionsAndUnicode function', () => {
    const expectedVal = 'ciao 🐱 :cat 🐈 ciao :sweat';
    assert(
      checkTextWithAutoSuggestionsAndUnicode('ciao :cat: :cat :cat2: ciao :sweat') === expectedVal,
      'invalid value :(',
    );
  });

  it('should test checkTextWithAutoSuggestionsAndUnicode function - working case', () => {
    const expectedVal = 'ciao 😐';
    assert(checkTextWithAutoSuggestionsAndUnicode('ciao :neu') === expectedVal, 'invalid value :(');
  });
});
