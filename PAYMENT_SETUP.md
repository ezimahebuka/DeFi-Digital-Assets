# Payment Methods Setup Guide

## Overview

Your deposit system now supports 4 payment methods:

1. Bitcoin (BTC)
2. Cash App
3. PayPal
4. Bank Transfer

## How to Update Payment Details

Open `src/Pages/Deposit/Payment.jsx` and find the `paymentConfig` object (around line 18).

### 1. Bitcoin (BTC)

```javascript
BTC: {
  name: "Bitcoin (BTC)",
  icon: <SiBitcoin />,
  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", // ← Replace with your BTC address
  network: "Bitcoin Network",
  // ...
}
```

**Replace:** `address` with your actual Bitcoin wallet address

---

### 2. Cash App

```javascript
CASHAPP: {
  name: "Cash App",
  icon: <SiCashapp />,
  address: "$YourCashAppTag", // ← Replace with your Cash App tag
  network: "Cash App",
  // ...
}
```

**Replace:** `address` with your Cash App tag (e.g., `$JohnDoe123`)

---

### 3. PayPal

```javascript
PAYPAL: {
  name: "PayPal",
  icon: <SiPaypal />,
  address: "your-email@example.com", // ← Replace with your PayPal email
  network: "PayPal",
  // ...
}
```

**Replace:** `address` with your PayPal email address

---

### 4. Bank Transfer

```javascript
BANK: {
  name: "Bank Transfer",
  icon: <FaUniversity />,
  address: "Account: 1234567890 | Bank: Your Bank Name | Routing: 123456789", // ← Replace with your bank details
  network: "Bank Transfer",
  // ...
}
```

**Replace:** `address` with your bank details in this format:

```
Account: [Your Account Number] | Bank: [Your Bank Name] | Routing: [Routing Number]
```

---

## Features Implemented

✅ **4 Payment Methods** - BTC, Cash App, PayPal, Bank Transfer
✅ **Modern UI** - Clean, professional design with icons
✅ **Copy to Clipboard** - Easy copying of payment details
✅ **File Upload** - Users can upload payment proof
✅ **Validation** - Ensures amount and payment method are selected
✅ **Instructions** - Clear step-by-step instructions for each method
✅ **Responsive** - Works on all devices

---

## User Flow

1. User enters deposit amount
2. User selects payment method (BTC, Cash App, PayPal, or Bank)
3. User clicks "Proceed to payment"
4. Payment page shows:
   - Payment details (address/email/bank info)
   - Copy button for easy copying
   - Step-by-step instructions
   - File upload for payment proof
5. User uploads proof and submits
6. Success message appears
7. User returns to dashboard

---

## Testing

To test the payment flow:

1. Go to Deposit page
2. Enter an amount (e.g., 100)
3. Select a payment method
4. Click "Proceed to payment"
5. Verify the correct payment details appear
6. Test the copy button
7. Upload a test file
8. Submit payment

---

## Customization

### To add more payment methods:

1. Add a new entry to `paymentConfig` in `Payment.jsx`
2. Add the method to `paymentMethods` array in `Deposit.jsx`

### To change instructions:

Edit the `instructions` array for each payment method in `paymentConfig`

### To change styling:

Edit `src/Pages/Deposit/Payment.css` and `src/Pages/Deposit/Deposit.css`

---

## Important Notes

⚠️ **Security**: Never commit real payment details to public repositories
⚠️ **Validation**: The backend should verify all deposits before crediting accounts
⚠️ **File Upload**: Currently stores file locally - implement proper file upload to server
⚠️ **Payment Verification**: Implement proper payment verification on the backend

---

## Support

If you need to modify the payment flow or add features, the main files are:

- `src/Pages/Deposit/Deposit.jsx` - Deposit form
- `src/Pages/Deposit/Payment.jsx` - Payment details page
- `src/Pages/Deposit/Deposit.css` - Deposit styling
- `src/Pages/Deposit/Payment.css` - Payment styling
