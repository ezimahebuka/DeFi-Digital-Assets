// counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const swift = createSlice({
  name: "asset",
  initialState: {
    idValue: "",
    authToken: "",
    user: null,
    referralLink: "",
    depositData: [],
    withdraw: [],
    plans: [],
    singlePlan: {},
  },

  reducers: {
    setIdValue(state, action) {
      state.idValue = action.payload;
    },
    setAuthToken(state, { payload }) {
      state.authToken = payload;
      console.log("Redux auth token set");
    },
    setReferralLink(state, { payload }) {
      state.referralLink = payload;
      console.log("Redux referral link set:", payload);
    },
    clearAuth(state) {
      state.authToken = "";
      state.user = null;
      state.referralLink = "";
    },
    swiftUserData(state, { payload }) {
      state.user = payload;
      console.log("Redux User data", payload);
    },

    updateDepositData(state, action) {
      state.depositData.push(action.payload);
      console.log("FIRST", action.payload);
      //  = [...state.depositData, action.payload]4
    },

    updatewithdraw(state, action) {
      state.withdraw.push(action.payload);
      console.log("FIRST", action.payload);
      //  = [...state.depositData, action.payload]
    },
    addPlans(state, { payload }) {
      // state.plans.push(payload);
      state.plans = [...state.plans, payload];

      console.log("Plan Added", payload);
    },
    getSinglePlan(state, { payload }) {
      state.singlePlan = payload;
      console.log("Single Plan Added", payload);
    },
    clearPlans(state) {
      state.plans = [];
    },
    removeSinglePlan: (state, { payload }) => {
      const updatedPlans = state.plans.filter(
        (item) => item.packageId !== payload.packageId,
      );
      state.plans = updatedPlans;
      console.log("Single Plan Deleted", updatedPlans);
    },
  },
});

export const {
  setIdValue,
  setAuthToken,
  setReferralLink,
  clearAuth,
  swiftUserData,
  updateDepositData,
  updatewithdraw,
  addPlans,
  clearPlans,
  getSinglePlan,
  removeSinglePlan,
} = swift.actions;
export default swift.reducer;
