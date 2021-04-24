'use strict';

const { expect } = require('@jest/globals');
const pattern = require('./pattern');

test(
    'pattern.js sum()테스트',
    function() {
        expect(pattern.sum(1, 2)).toBe(3);
    }
)

test(
    'pattern.js calculateSum()테스트', () => {
        expect(pattern.calculateSum(10)).toBe(45);
    }
)

test (
    '딸기 세기 테스트', () => {
        // fixture : 테스트를 위해 미리 생성해놓는 데이터
        let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기'];
        expect(pattern.countBerry(fruitsBasket)).toBe(0);
    }
) 

test(
    'lowerPM10_MSRSTE_NM 테스트', () => {
        let msrArray_expected = ['용산구', '양천구'];
        expect(pattern.lowerPM10_MSRSTE_NM(10)).toEqual(expect.arrayContaining(msrArray_expected));
    }
)