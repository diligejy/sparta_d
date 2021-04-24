'use strict';

const click_button_eventHandler = require('./count');

test(
    'click_button_eventHandler 테스트', () => {
        expect(click_button_eventHandler).toBe(0);
    }
)