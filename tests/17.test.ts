import letterCombinations from '../problems/17';

test('Input: "23" Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
	expect(new Set(letterCombinations("23"))).toEqual(new Set(["ad","ae","af","bd","be","bf","cd","ce","cf"]));
});

test('Input: "" Output: []', () => {
	expect(new Set(letterCombinations(""))).toEqual(new Set([]));
});

test('Input: "2" Output: ["a","b","c"]', () => {
	expect(new Set(letterCombinations("2"))).toEqual(new Set(["a","b","c"]));
});
