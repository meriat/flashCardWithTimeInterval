import { FlashCard } from '../src/flashCard.js';

describe('FlashCard', function(){
    // let timeInterval = setInterval(2000);
    let testAnswer = new FlashCard("camelCase");

    beforeEach(function(){
        jasmine.clock().install();
        testAnswer.setTimeLimit();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it('should have a time limit of 20 seconds to answer the question', function(){
        expect(testAnswer.answer).toEqual("camelCase");
        expect(testAnswer.timeLimit).toEqual(20);
    });

    it('user should have 17 seconds remaining to answer the question after 3001 milliseconds', function(){
        jasmine.clock().tick(3001);
        expect(testAnswer.timeLimit).toEqual(17);
    })
});