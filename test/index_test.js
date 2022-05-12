const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.strictEqual(actual, expected);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //Setup
      const expected = '5';
      const hour = 5;

      //Execute
      const actual = Rooster.timeAtDawn(hour);

      //Verify
      assert.strictEqual(actual, expected);
    });

    it('throws an error if passed a number less than 0', () => {
      //Setup
      const hour = -3;

      //Execute & Verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });

    it('throws an error if passed a number greater than 23', () => {
      //Setup
      const hour = 34;

      //Execute & Verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });
  });
});