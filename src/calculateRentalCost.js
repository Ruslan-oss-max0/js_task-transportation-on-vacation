'use strict';

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCarRentalCost = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const totalAmount = dailyCarRentalCost * days;

  if (days >= 7) {
    return totalAmount - discountForSevenDays;
  }

  if (days >= 3) {
    return totalAmount - discountForThreeDays;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
