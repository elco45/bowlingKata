const Game = require('../src/game').Game;
const expect = require('chai').expect;

describe('Bowling game', () => {
    var game;
    beforeEach(function(){
        game = new Game();
    });

    var rollMany = function(n, pins){
        for (var i = 0; i < n; i++) {
            game.roll(pins);
        }
    }

    var rollSpare = function(){
        game.roll(5);
        game.roll(5);
    }

    var rollStrike = function(){
        game.roll(10);
    }

    describe('The requirements to calculate the score are...', () => {
        describe('A new game', () => {
            it('should create a new game', () => {
                var g =new Game()
                expect(g).to.exist;
            })
        });
        describe('A gutter game', () => {
            it('should return 0 after finishing the game', () => {
                rollMany(20,0);
                expect(game.score()).to.equal(0);
            })
        });
        describe('A bad game of all ones', () => {
            it('should return 20 after finishing the game', () => {
                rollMany(20,1);
                expect(game.score()).to.equal(20);
            })
        });
        describe('One Spare', () => {
            it('should return 10 plus the next throw score', () => {
                rollSpare();
                game.roll(3); 
                rollMany(17,0);
                expect(game.score()).to.equal(16);
            })
        });
        describe('One Strike', () => {
            it('should return 10 plus two times the next roll score', () => {
                rollStrike();
                game.roll(3); 
                game.roll(4);
                rollMany(16,0);
                expect(game.score()).to.equal(24);
            })
        });
        describe('A perfect game', () => {
            it('should return 10 plus the next throw score', () => {
                rollMany(12,10);
                expect(game.score()).to.equal(300);
            })
        });
    });
});