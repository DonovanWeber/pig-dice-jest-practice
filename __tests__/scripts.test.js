
import { Player } from "./../src/scripts.js"

describe('Player', () => {
  test('should correctly create a player object with three scores', () => {
    const player = new Player(0,0,0);
    expect(player.totalScore).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.currentScore).toEqual(0);
  });
  
  test('should add a random number to current score when a player rolls dice', () => {
    let newPlayer = new Player(0,0,4);
    expect(newPlayer.RollDice()).toBeLessThanOrEqual(6);
  });
});