var Game = (function () {
    // If you define an attribute with private
    // the value is automatically assigned
    function Game() {
        this.isStrike = function (firstInFrame) {
            return rolls[firstInFrame] == 10;
        };
        this.isSpare = function (firstInFrame) {
            return rolls[firstInFrame] + rolls[firstInFrame + 1] == 10;
        };
        this.nextBallForSpare = function (firstInFrame) {
            return rolls[firstInFrame + 2];
        };
        this.nextBallForStrike = function (firstInFrame) {
            return rolls[firstInFrame + 1] + rolls[firstInFrame + 2];
        };
        this.twoBallsinFrame = function (firstInFrame) {
            return rolls[firstInFrame] + rolls[firstInFrame + 1];
        };
        this.roll = function (pin) {
            rolls[currentRoll++] = pin;
        };
        this.score = function () {
            var score = 0;
            var firstInFrame = 0;
            console.log(rolls);
            for (var frame = 0; frame < 10; frame++) {
                if (this.isStrike(firstInFrame)) {
                    score += 10 + this.nextBallForStrike(firstInFrame);
                    firstInFrame++;
                }
                else if (this.isSpare(firstInFrame)) {
                    score += 10 + this.nextBallForSpare(firstInFrame);
                    firstInFrame += 2;
                }
                else {
                    score += this.twoBallsinFrame(firstInFrame);
                    firstInFrame += 2;
                }
            }
            return score;
        };
        rolls = [];
        currentRoll = 0;
    }
    return Game;
}());
module.exports = {
    Game: Game
};
