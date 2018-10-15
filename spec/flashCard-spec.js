import { FlashCard } from '../src/flashCard.js';

describe('FlashCard', function(){
    // let timeInterval = setInterval(2000);
    let testAnswer = new FlashCard("synchronous");

    beforeEach(function(){
        jasmine.clock().install();
        testAnswer.setTimeLimit();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it('should have a time limit of 20 seconds to answer the question', function(){
        expect(testAnswer.userAnswer).toEqual("synchronous");
        expect(testAnswer.timeLimit).toEqual(20);
    });

    it('user should have 17 seconds remaining to answer the question after 3001 milliseconds', function(){
        jasmine.clock().tick(3001);
        expect(testAnswer.timeLimit).toEqual(17);
    });

    it('does the user have time to answer the question', function(){
        testAnswer.timeLimit = 5;
        expect(testAnswer.doYouHaveTimeLeft()).toEqual(true);
    });


});