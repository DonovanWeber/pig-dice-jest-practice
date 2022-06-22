import { Player } from "./../src/scripts.js"

describe('Player', () => {
  test('should correctly create a player object with three scores', () => {
    const player = new Player(0,0,0);
    expect(player.totalScore).toEqual(0);
    expect(player.roundScore).toEqual(0);
    expect(player.currentScore).toEqual(0);
  });
});