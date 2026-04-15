'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let amountAdded = 0;

  return function adder(num) {
    if (num !== undefined) {
      amountAdded += num;

      return adder;
    }

    const totalAdded = amountAdded;

    amountAdded = 0;

    return totalAdded;
  };
}

module.exports = makeInfinityAdder;
