///////////////////////////////////////////////////////
// Get rid of 'let's and make use of .map, .reduce ...

const salesAgentRevenuePercent = 20

// Example #1
const getTheMoneyEarnedByTheAgent = (coupons) => {
  let earnedMoney = 0
  if (coupons.length !== 0) {
    return coupons.map(coupon => {
      earnedMoney = earnedMoney + coupon.TotalInvoicePrice / 100 * salesAgentRevenuePercent
      return earnedMoney
    })[coupons.length - 1].toFixed(2)
  }
  return earnedMoney
}
