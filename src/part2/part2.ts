import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number =
    (s: string) => (R.reduce(
        ((acc: number, c: string) => (vowels.includes(c) ? acc + 1 : acc)),
        0,
        stringToArray(s)
    )
    );

console.log(countVowels("Hellooo"));
/* Question 2 */
export const isPalindrome: undefined = undefined;

/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence: undefined = undefined;
