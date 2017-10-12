///////////////////////////////////////////////////////
// Get rid of 'let's and make use of .map, .reduce ...


// Example #1
const getTheMoneyEarnedByTheAgent = (coupons) => {
  let earnedMoney = 0
  if (coupons.length !== 0) {
    return coupons.map(coupon => {
      earnedMoney = earnedMoney + coupon.TotalInvoicePrice / 100 * config.salesAgentRevenuePercent
      return earnedMoney
    })[coupons.length - 1].toFixed(2)
  }
  return earnedMoney
}

const REFACTOR_getTheMoneyEarnedByTheAgent = (coupons) => {
  return (coupons || []).reduce((prev, cur) => {
    return prev + cur.TotalInvoicePrice / 100 * config.salesAgentRevenuePercent
  }, 0).toFixed(2)
}
