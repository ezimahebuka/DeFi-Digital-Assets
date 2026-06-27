# Withdrawal System Setup Guide

## Overview

Your withdrawal system now matches the deposit system with expandable crypto wallet options and multiple payment methods.

## Features Implemented

✅ **Expandable Crypto Wallet** - Click to reveal 9 different crypto networks
✅ **9 Crypto Networks** - BTC, ETH, USDT (3 networks), BNB, SOL, XRP, TRX
✅ **3 Other Payment Methods** - Cash App, PayPal, Bank Transfer
✅ **OTP Verification** - Security verification via email
✅ **Balance Validation** - Checks if user has sufficient balance
✅ **Modern UI** - Smooth animations and expandable sections
✅ **Withdrawal Summary** - Real-time summary of withdrawal details
✅ **Responsive Design** - Works on all devices

---

## User Flow

### 1. Withdrawal Landing Page (`Withdrawal.jsx`)

- Shows overview of withdrawal options
- Displays minimum/maximum amounts
- Lists all available withdrawal methods
- "Request Withdrawal" button leads to withdrawal form

### 2. Withdrawal Form (`WithdrawFunds.jsx`)

1. User enters withdrawal amount
2. System validates against available balance
3. User requests OTP (sent to email)
4. User enters OTP code
5. User clicks "Crypto Wallet" to expand network options
6. User selects specific network (e.g., USDT TRC20)
7. OR user selects Cash App, PayPal, or Bank Transfer
8. User enters wallet address/payment details
9. User clicks "Complete Withdrawal Request"
10. System validates all inputs
11. Withdrawal request is submitted
12. User receives confirmation

---

## Validation Rules

### Amount Validation

- Must be greater than $0
- Cannot exceed available balance
- Minimum withdrawal: $10 (configurable)

### OTP Validation

- Must request OTP first
- OTP must match the one sent to email
- Required for security

### Payment Method Validation

- Must select a payment method
- Must enter wallet address/payment details
- Different placeholders for different methods

### Wallet Address Formats

- **Crypto**: Single line wallet address
- **Bank**: Multi-line format (Bank Name | Account | Routing)
- **Cash App**: Cash App tag (e.g., $YourTag)
- **PayPal**: Email address

---

## Components Structure

### Files Modified/Created

1. **src/Pages/Withdrawal/Withdrawal.jsx**
   - Landing page with withdrawal overview
   - Shows available methods and features
   - Modern card-based design

2. **src/Pages/Withdrawal/WithdrawFunds.jsx**
   - Main withdrawal form
   - Expandable crypto wallet networks
   - OTP verification
   - Balance validation
   - Real-time summary

3. **src/Pages/Withdrawal/Withdrawal.css**
   - Styling for landing page
   - Gradient backgrounds
   - Responsive design

4. **src/Pages/Withdrawal/WithdrawFunds.css**
   - Styling for withdrawal form
   - Expandable network options
   - Summary card styling

---

## Key Features Explained

### Expandable Crypto Wallet

```javascript
// When user clicks "Crypto Wallet", it expands to show:
- Bitcoin (BTC)
- Ethereum (ETH)
- USDT (ERC20) - Ethereum network
- USDT (TRC20) - Tron network
- USDT (BEP20) - Binance Smart Chain
- Binance Coin (BNB)
- Solana (SOL)
- Ripple (XRP)
- Tron (TRX)
```

### OTP Security

- User must request OTP before withdrawal
- OTP is sent to registered email
- Must enter correct OTP to proceed
- Prevents unauthorized withdrawals

### Balance Validation

- Checks available balance in real-time
- Shows error if insufficient funds
- Displays current balance in summary

### Smart Placeholders

- Changes based on selected payment method
- Crypto: "Enter your BTC wallet address"
- Bank: "Enter: Bank Name | Account Number | Routing"
- Cash App: "Enter your Cash App tag"
- PayPal: "Enter your PayPal email"

---

## API Endpoints Used

### Request OTP

```javascript
POST https://omegaexchangebackend.onrender.com/api/requestwithdrawcode/${userId}
```

### Submit Withdrawal

```javascript
POST https://omegaexchangebackend.onrender.com/api/withdraw/${userId}

Body:
{
  walletAddress: "user's wallet/payment details",
  amount: "withdrawal amount",
  coin: "selected payment method (BTC, ETH, CASHAPP, etc.)"
}
```

---

## Customization

### To Change Minimum/Maximum Amounts

Edit the landing page (`Withdrawal.jsx`):

```javascript
<span className="info-value">$10.00</span>  // Minimum
<span className="info-value">$1,000,000</span>  // Maximum
```

### To Add More Crypto Networks

Edit `WithdrawFunds.jsx`:

```javascript
networks: [
  // ... existing networks
  { id: "doge", name: "Dogecoin (DOGE)", route: "DOGE" },
];
```

### To Change OTP Email

The email is automatically sent to `userData.email` from Redux store.

### To Modify Validation Rules

Edit the validation functions in `WithdrawFunds.jsx`:

- `handleAmount()` - Amount validation
- `handleWithdrawCodes()` - OTP validation
- `sendWallet()` - Final submission validation

---

## Testing Checklist

- [ ] Enter amount less than balance
- [ ] Enter amount more than balance (should show error)
- [ ] Request OTP (check email)
- [ ] Enter wrong OTP (should show error)
- [ ] Enter correct OTP
- [ ] Click "Crypto Wallet" (should expand)
- [ ] Select a crypto network
- [ ] Enter wallet address
- [ ] Submit withdrawal
- [ ] Test with Cash App
- [ ] Test with PayPal
- [ ] Test with Bank Transfer
- [ ] Test on mobile device
- [ ] Test validation errors

---

## Security Notes

⚠️ **Important Security Measures:**

- OTP verification is required for all withdrawals
- Balance is validated before submission
- Wallet addresses should be validated on backend
- Consider adding withdrawal limits per day/week
- Log all withdrawal attempts for audit
- Implement rate limiting on OTP requests
- Add 2FA for additional security

---

## Backend Requirements

Your backend should:

1. Send OTP to user's email
2. Store OTP temporarily (with expiration)
3. Validate OTP on withdrawal request
4. Check user's balance
5. Process withdrawal based on payment method
6. Update user's balance
7. Send confirmation email
8. Log transaction for audit

---

## User Experience Improvements

✅ Real-time balance display
✅ Clear error messages
✅ Loading states on buttons
✅ Expandable sections for better organization
✅ Summary card shows all details
✅ Responsive design for mobile
✅ Smooth animations
✅ Clear instructions for each method

---

## Support

Main files for the withdrawal system:

- `src/Pages/Withdrawal/Withdrawal.jsx` - Landing page
- `src/Pages/Withdrawal/WithdrawFunds.jsx` - Withdrawal form
- `src/Pages/Withdrawal/Withdrawal.css` - Landing page styling
- `src/Pages/Withdrawal/WithdrawFunds.css` - Form styling

For issues or modifications, check these files first.
