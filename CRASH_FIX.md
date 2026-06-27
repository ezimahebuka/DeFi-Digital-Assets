# Browser Crash Fix - Expandable Crypto Wallet

## Problem

When clicking on the "Crypto Wallet" option, the browser would crash or freeze.

## Root Cause

The issue was caused by multiple factors:

1. **Event propagation conflicts**: Click handlers on nested elements were interfering with each other
2. **State update loops**: The way `handlePaymentMethodChange` was structured could cause React to re-render infinitely
3. **Non-memoized callbacks**: Event handlers were being recreated on every render, causing unnecessary re-renders

## Solution Applied (FINAL FIX)

### 1. Separated Concerns - Different Handlers for Different Actions

**Before:** One handler doing multiple things

```jsx
const handlePaymentMethodChange = (methodRoute, isExpandable = false) => {
  if (isExpandable) {
    setExpandedMethod(expandedMethod === methodRoute ? null : methodRoute);
  } else {
    setSelectedPaymentMethod(methodRoute);
  }
};
```

**After:** Separate, memoized handlers

```jsx
const toggleExpand = useCallback((methodRoute) => {
  setExpandedMethod((prev) => (prev === methodRoute ? null : methodRoute));
}, []);

const handlePaymentMethodChange = useCallback((methodRoute) => {
  setSelectedPaymentMethod(methodRoute);
}, []);

const handleNetworkSelect = useCallback((networkRoute) => {
  setSelectedPaymentMethod(networkRoute);
}, []);
```

### 2. Restructured JSX - Conditional Rendering at Top Level

**Before:** Complex nested conditionals

```jsx
<div className="DepositContentLeftDownInput">
  <span onClick={...}>{method.name}</span>
  {method.isExpandable ? (
    <span className="expand-icon" onClick={...}>▶</span>
  ) : (
    <input type="radio" ... />
  )}
</div>
```

**After:** Clean separation between expandable and non-expandable

```jsx
{method.isExpandable ? (
  <>
    <div className="DepositContentLeftDownInput expandable" onClick={() => toggleExpand(method.route)}>
      <span>{method.name}</span>
      <span className="expand-icon">▶</span>
    </div>
    {expandedMethod === method.route && (
      <div className="DepositNetworkOptions">
        {/* Networks */}
      </div>
    )}
  </>
) : (
  <div className="DepositContentLeftDownInput">
    <span>{method.name}</span>
    <input type="radio" ... />
  </div>
)}
```

### 3. Used useCallback for Performance

All event handlers are now wrapped in `useCallback` to prevent unnecessary re-renders:

```jsx
import { useState, useCallback } from "react";

const toggleExpand = useCallback((methodRoute) => {
  setExpandedMethod((prev) => (prev === methodRoute ? null : methodRoute));
}, []);
```

### 4. Proper State Updates

Using functional updates to avoid stale closures:

```jsx
// Before (could cause issues)
setExpandedMethod(expandedMethod === methodRoute ? null : methodRoute);

// After (safe)
setExpandedMethod((prev) => (prev === methodRoute ? null : methodRoute));
```

### 5. Restored CSS Cursor

```css
.DepositContentLeftDownInput.expandable {
  cursor: pointer;
}
```

## Files Modified

1. **src/Pages/Deposit/Deposit.jsx**
   - Added `useCallback` import
   - Created separate `toggleExpand`, `handlePaymentMethodChange`, and `handleNetworkSelect` handlers
   - Restructured JSX with conditional rendering at top level
   - Simplified event handling

2. **src/Pages/Deposit/Deposit.css**
   - Restored `cursor: pointer` for expandable items

3. **src/Pages/Withdrawal/WithdrawFunds.jsx**
   - Applied same fixes as Deposit.jsx

4. **src/Pages/Withdrawal/WithdrawFunds.css**
   - Applied same CSS fixes as Deposit.css

## How It Works Now

1. **Clicking on "Crypto Wallet"**: Entire div is clickable, calls `toggleExpand()`
2. **Clicking on arrow icon**: Part of the same div, same behavior
3. **Clicking on network option**: Calls `handleNetworkSelect()` directly
4. **Clicking on radio button**: Has `stopPropagation()` to prevent parent click
5. **Clicking on other payment methods**: Calls `handlePaymentMethodChange()` via radio input

## Why This Fix Works

### useCallback Prevents Re-render Loops

Without `useCallback`, every render creates new function references:

```jsx
// BAD - New function every render
const handleClick = () => { ... }

// GOOD - Same function reference
const handleClick = useCallback(() => { ... }, [])
```

### Functional State Updates Prevent Stale Closures

```jsx
// BAD - Uses stale value from closure
setExpandedMethod(expandedMethod === route ? null : route);

// GOOD - Always uses current value
setExpandedMethod((prev) => (prev === route ? null : route));
```

### Conditional Rendering Prevents Event Conflicts

By separating expandable and non-expandable items at the JSX level, we avoid complex nested conditionals that can cause React to get confused about which handlers to attach.

## Testing Checklist

- ✅ Click on "Crypto Wallet" - expands smoothly
- ✅ Click on "Crypto Wallet" again - collapses smoothly
- ✅ Click on arrow icon - expands/collapses
- ✅ Click on network (e.g., "Bitcoin (BTC)") - selects it
- ✅ Click on network radio button - selects it
- ✅ Switch between networks - works smoothly
- ✅ Click on "Cash App" - selects it directly
- ✅ Browser does NOT freeze or crash
- ✅ No console errors
- ✅ Smooth animations

## Key Takeaways

1. **Separate concerns**: One function = one responsibility
2. **Memoize callbacks**: Use `useCallback` for event handlers
3. **Functional updates**: Use `setState(prev => ...)` pattern
4. **Clean JSX structure**: Avoid deeply nested conditionals
5. **Stop propagation**: Use when you have nested interactive elements

## Performance Benefits

- Fewer re-renders (memoized callbacks)
- No infinite loops (functional state updates)
- Cleaner component tree (conditional rendering)
- Better React reconciliation (stable function references)
