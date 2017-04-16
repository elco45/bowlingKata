class Game {
 	private rolls: number[];
 	private currentRoll: number;
	  
	// If you define an attribute with private
	// the value is automatically assigned
	constructor(){
	    rolls = [];
	    currentRoll = 0;
	}

	const isStrike = function(firstInFrame: number): boolean {
		return rolls[firstInFrame] == 10;
	};

	const isSpare = function(firstInFrame: number): boolean {
		return rolls[firstInFrame] + rolls[firstInFrame+1] == 10;
	};

	const nextBallForSpare = function(firstInFrame: number): number {
		return rolls[firstInFrame+2];
	};

	const nextBallForStrike = function(firstInFrame: number): number {
		return rolls[firstInFrame + 1] + rolls[firstInFrame + 2];
	};
  	
  	const twoBallsinFrame = function(firstInFrame: number): number {
		return rolls[firstInFrame] + rolls[firstInFrame+1];
	};

	const roll = function (pin: number): void {
		rolls[currentRoll++] = pin;
	};

	const score = function(): number{
		let score: number = 0;
		let firstInFrame: number = 0;
		console.log(rolls);
		for (let frame: number = 0; frame < 10; frame++) {
			if(this.isStrike(firstInFrame)){
				score += 10 + this.nextBallForStrike(firstInFrame);
				firstInFrame++;
			}else if(this.isSpare(firstInFrame)){
				score += 10 + this.nextBallForSpare(firstInFrame);
				firstInFrame += 2;
			}else{
				score += this.twoBallsinFrame(firstInFrame);
				firstInFrame += 2;
			}
		}
		return score;
	}
}


module.exports = {
    Game
};
