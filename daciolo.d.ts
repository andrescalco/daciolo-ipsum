declare module 'daciolo-ipsum' {
    export interface Options {
        readonly paragraphs?: number;
        readonly quotes_per_paragraphs?: number;
        readonly wrap_with_paragraph_tags?: boolean;
    }

    /**
     * Generates a random quote of out the best possibles, in the name of the Lord.
     * 
     * @param options Configurations to generate this quote
     * @returns The generated quote
     * @example //Without any option
     * generate_quote();
     * @example //With paragraphs option
     * generate_quote({
     *   paragraphs: 20
     * });
     * @example //With paragraphs and quotes per paragraphs option
     * generate_quote({
     *   paragraphs: 20,
     *   quotes_per_paragraphs: 4
     * });
     * @example //With all option
     * generate_quote({
     *   paragraphs: 20,
     *   quotes_per_paragraphs: 4,
     *   wrap_with_paragraph_tags: true
     * });
     */
    export default function generate_quote(options: Options): string;
}
