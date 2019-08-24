/*jslint node: true, nomen: true, unparam: true */
/*global describe, it, expect, beforeEach */

"use strict";

var jsdom = require('jsdom').jsdom,
    jQuery = require("jquery"),
    rulesEngine = require('../src/rules.js'),
    options = {
        common: {
            minChar: 6,
            usernameField: '#username'
        },
        rules: {
            activated : {
                wordNotEmail: true,
                wordMinLength: true,
                wordMaxLength: false,
                wordInvalidChar: false,
                wordSimilarToUsername: true,
                wordSequences: true,
                wordTwoCharacterClasses: false,
                wordRepetitions: false,
                wordLowercase: true,
                wordUppercase: true,
                wordOneNumber: true,
                wordThreeNumbers: true,
                wordOneSpecialChar: true,
                wordTwoSpecialChar: true,
                wordUpperLowerCombo: true,
                wordLetterNumberCombo: true,
                wordLetterNumberCharCombo: true,
                wordIsACommonPassword: true
            },
            scores: {
                wordNotEmail: -100,
                wordMinLength: -50,
                wordMaxLength: -50,
                wordInvalidChar: -100,
                wordSimilarToUsername: -100,
                wordSequences: -50,
                wordTwoCharacterClasses: 2,
                wordRepetitions: -25,
                wordLowercase: 1,
                wordUppercase: 3,
                wordOneNumber: 3,
                wordThreeNumbers: 5,
                wordOneSpecialChar: 3,
                wordTwoSpecialChar: 5,
                wordUpperLowerCombo: 2,
                wordLetterNumberCombo: 2,
                wordLetterNumberCharCombo: 2,
                wordIsACommonPassword: -100
            },
            raisePower: 1.4,
            commonPasswords: [
                '123456',
                'password',
                '12345678',
                'qwerty'
            ]
        },
        ui: {
            spanError: function (options, rule) { return rule; }
        },
        instances: {
            errors: []
        }
    },
    strictOptions,
    relaxedOptions,
    $;

$ = jQuery(jsdom().defaultView);

strictOptions = $.extend(true, {}, options);
strictOptions.rules.activated.wordTwoCharacterClasses = true;
strictOptions.rules.activated.wordRepetitions = true;

relaxedOptions = $.extend(true, {}, options);
relaxedOptions.rules.activated.wordNotEmail = false;
relaxedOptions.rules.activated.wordMinLength = false;
relaxedOptions.rules.activated.wordSequences = false;

describe('Applying default rules', function () {
    it('to a common "password"', function () {
        var password = 'password';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(-80.62082632004744);
    });

    it('to a mixed "charsand19283746"', function () {
        var password = 'charsand19283746';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(59.50293012833273);
    });

    it('to one with upper cases', function () {
        var password = 'QAZwsxTGByhn';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(38.423040924494714);
    });

    it('to one with symbols', function () {
        var password = 'qpwo#(ei*$&%^';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(47.26775666655811);
    });

    it('to one with everything', function () {
        var password = '3vEr!t#iNg1$f!n3';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(74.50293012833274);
    });

    it('to the perfect one', function () {
        var password = 'qm2oUY!%$32znheSK&*3@#';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(101.75159003283396);
    });

    it('to one with sequences', function () {
        var password = 'qwertypasswdisbad';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(3.799339527161436);
    });

    it('to one with reversed sequences', function () {
        var password = '0987ytrewqisbad';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(5.312654085941652);
    });

    it('to one with an email', function () {
        var password = 'test@example.com';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(-45.49706987166727);
    });

    it('to a "short" one', function () {
        var password = 'short';
        expect(rulesEngine.executeRules(options, password))
            .toEqual(-39.48173030642061);
    });
});

describe('Applying stricter rules', function () {
    it('to two-classes "passWORD"', function () {
        var password = 'passWORD';
        expect(rulesEngine.executeRules(strictOptions, password))
            .toEqual(26.379173679952558);
    });

    it('to one with repetitions', function () {
        var password = 'rreepppeatttt';
        expect(rulesEngine.executeRules(strictOptions, password))
            .toEqual(12.267756666558107);
    });
});

describe('Applying relaxed rules', function () {
    it('to one with sequences', function () {
        var password = 'qwertypasswdisbad';
        expect(rulesEngine.executeRules(relaxedOptions, password))
            .toEqual(1);
    });

    it('to one with an email', function () {
        var password = 'test@example.com';
        expect(rulesEngine.executeRules(relaxedOptions, password))
            .toEqual(6);
    });

    it('to a "short" one', function () {
        var password = 'short';
        expect(rulesEngine.executeRules(relaxedOptions, password))
            .toEqual(1);
    });
});

describe('Looking for sequences', function () {
    beforeEach(function () {
        options.instances.errors = [];
    });

    it('at the beginning of the password', function () {
        var password = 'abcx';
        expect(rulesEngine.validation.wordSequences(options, password, 123)).toEqual(123);
    });

    it('at the end of the password', function () {
        var password = 'xabc';
        expect(rulesEngine.validation.wordSequences(options, password, 123))
            .toEqual(123);
    });

    it('and not finding them', function () {
        var password = 'mdiw93jc65oak$&!';
        expect(rulesEngine.validation.wordSequences(options, password, 123))
            .toEqual(0);
    });
});
