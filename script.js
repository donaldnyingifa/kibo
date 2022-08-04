let walletBalance = 100, totalBill = 0, shopTotal = 1000, totalCoin = 0;
let balance = document.getElementById('balance');
let coin = document.getElementById('smartcoin');
let shopBalance = document.getElementById('shop-balance');
let message = document.getElementById('message');
let billToPay = document.getElementById('pay');
let couponCode = document.getElementById('coupon');
let topup = document.getElementById('topup');
balance.innerText = walletBalance;
shopBalance.innerText = shopTotal;
billToPay.innerText = totalBill;
coin.innerText = totalCoin;

let applyCoupon = true;

const handleCoupon = (text) => {
  if (totalBill <= 0) {
    message.innerText = "Please enter a valid amount!";
    clearMessage(2000);
  }
  else if (text === 'kibo' && applyCoupon) {
    const discount = Math.floor(totalBill / 10);
    totalBill -= discount;
    billToPay.innerText = totalBill;
    applyCoupon = false;
    message.innerText = "Coupon Applied!";
    clearMessage(2000);
  } else {
    message.innerText = "Invalid Coupon ! ";
    clearMessage(2000);
  }
}

const handleTopUp = (value) => {
  totalBill = value;
  billToPay.innerText = totalBill;
}

const handlePay = () => {
  if (shopTotal <= 0) {
    message.innerText = "Kibo Crypto Store was Hacked and is now Bankrupt!";
    return;
  }
  if (!Number(totalBill)) {
    message.innerText = 'Please enter a valid amount!'
    clearMessage();
    return
  }
  if (totalBill > walletBalance) {
    message.innerText = "Insufficient Wallet Balance";
    clearMessage();
  } else {
    walletBalance -= totalBill;
    totalCoin += Math.abs(Math.floor(Math.random() * 10 * totalBill));
    shopTotal += Number(totalBill);
    balance.innerText = walletBalance;
    coin.innerText = totalCoin;
    shopBalance.innerText = shopTotal;
    billToPay.innerText = 0;
    message.innerText = `You successfully converted $${totalBill} to Kibo Smart Coin :) `;
    totalBill = 0;
    couponCode.value = "";
    topup.value = "";
    applyCoupon = true;
    clearMessage();
  }
}

const clearMessage = (time = 4000) => {
  setTimeout(() => message.innerText = '', time);
}