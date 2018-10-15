import { FlashCard } from '../src/flashCard.js';

/* eslint-disable no-unused-vars */
describe('FlashCard', function(){
    let testAnswer;
    
    beforeEach(function(){
        jasmine.clock().install();
        testAnswer = new FlashCard();
        testAnswer.setTimeLimit();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it('should have a time limit of 20 seconds to answer the question', function(){
        testAnswer.userAnswer.push("camelCase");
        expect(testAnswer.userAnswer[0]).toEqual("camelCase");
        expect(testAnswer.timeLimit).toEqual(20);
    });

    it('user should have 17 seconds remaining to answer the question after 3001 milliseconds', function(){
        jasmine.clock().tick(3001);
        expect(testAnswer.getTimeLimit()).toEqual(17);
    });

    it('does the user have time to answer the question', function(){
        testAnswer.timeLimit = 5;
        expect(testAnswer.doYouHaveTimeLeft()).toEqual(true);
    });

    it('give the user one point if their answer is correct', function(){
        testAnswer.userAnswer.push("camelCase");
        testAnswer.userAnswer.push("const");
        expect(testAnswer.points()).toEqual(2);
    });
});