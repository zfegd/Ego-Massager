/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.a73df195-947a-4bf7-9150-2f55c3095eee';

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'You possess such beauty.',
                'You are the smartest person I\'ve met.',
                'You are such a nice person.',
                'You would make a perfect partner.',
                'I love the way you smile.',
                'You have a great sense of humor.',
                'You are a great real model.',
                'I love your confidence.',
                'You know the difference between there, they\'re and their.',
                'Your smile warms my heart.',
                'You would make a perfect cloning specimen.',
                'Perfection has a name - yours.',
                'You break life\'s fourth wall.',
            ],
            SKILL_NAME: 'Compliments',
            GET_FACT_MESSAGE: "Here is something I think about you: ",
            HELP_MESSAGE: 'You can say tell me a compliment, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'You possess such beauty.',
                'You are literally the smartest person I have ever met. Ever.',
                'You are such a nice person.',
                'You would make a perfect partner.',
                'I love the way you smile.',
                'You have a great sense of humor.',
                'You are a great real model.',
                'I love your confidence.',
                'You know the difference between there, they\'re and their.',
                'Your smile warms my heart.',
                'You would make a perfect cloning specimen.',
                'Perfection has a name - yours.',
                'You break life\'s fourth wall.',
                ],
            SKILL_NAME: 'American Compliments',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'You are simply dashing.',
                'You are the smartest person I\'ve met.',
                'You are quite a gentleman.',
                'You would make a perfect partner.',
                'I love the way you smile.',
                'You have a great sense of humor.',
                'You are a great real model.',
                'I love your confidence.',
                'You know the difference between there, they\'re and their.',
                'You seem like you know how to brew a perfect cup of tea.',
                'You would make a perfect cloning specimen.',
                'Perfection has a name - yours.',
                'You break life\'s fourth wall.',
            ],
            SKILL_NAME: 'British Compliments',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'ExitIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
