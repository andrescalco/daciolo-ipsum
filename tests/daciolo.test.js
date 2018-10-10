const DACIOLO = require('daciolo');

describe('Testing generate_quote function', () => {
    const paragraphs = 1;
    const quotes_per_paragraph = 2;
    const wrap_with_paragraph_tags = true;

    const ipsum = expect.stringMatching(/./gm);

    test('Without any option', () => expect(DACIOLO.generate_quote()).toEqual(ipsum));

    test('With paragraphs option', () => expect(DACIOLO.generate_quote({ paragraphs })).toEqual(ipsum));

    test('With quotes_per_paragraph option', () => expect(DACIOLO.generate_quote({ quotes_per_paragraph })).toEqual(ipsum));

    test('With wrap_with_paragraph_tags option', () => expect(DACIOLO.generate_quote({ wrap_with_paragraph_tags })).toEqual(ipsum));

    test('With paragraphs and quotes_per_paragraph options', () => expect(DACIOLO.generate_quote({ paragraphs, quotes_per_paragraph })).toEqual(ipsum));

    test('With paragraphs and wrap_with_paragraph_tags options', () => expect(DACIOLO.generate_quote({ paragraphs, wrap_with_paragraph_tags })).toEqual(ipsum));

    test('With quotes_per_paragraph and wrap_with_paragraph_tags options', () => expect(DACIOLO.generate_quote({ quotes_per_paragraph, wrap_with_paragraph_tags })).toEqual(ipsum));

    test('With paragraphs, quotes_per_paragraph and wrap_with_paragraph_tags options', () => expect(DACIOLO.generate_quote({ paragraphs, quotes_per_paragraph, wrap_with_paragraph_tags })).toEqual(ipsum));
});
