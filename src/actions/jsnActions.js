import web3 from "../web3";
import JSN from "../jsn";
const SET_BALANCE = 'SET_BALANCE'
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
const SET_TOTAL_AMOUNT = 'SET_TOTAL_AMOUNT'
const SET_FREE_AMOUNT = 'SET_FREE_AMOUNT'
export const actions = {
  setBalance: (balance) => {
    return {
      type: SET_BALANCE,
      balance,
    };
  },

  setTotalAmount: (allAmount) => {
    return {
      type: SET_TOTAL_AMOUNT,
      allAmount,
    };
  },

  setFreeAmount: (freeAmount) => {
    return {
      type: SET_FREE_AMOUNT,
      freeAmount,
    };
  },

  fetchBalance: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.balanceOf.call(account).then((balance) => {
          dispatch(this.setBalance(balance.toString()))
        })
      })
    }
  },

  fetchAllAmount: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.getTotalSupply.call({ from: account }).then((allAmount) => {
          dispatch(this.setTotalAmount(allAmount.valueOf()))
        })
      })
    }
  },

  fetchFreeAmount: function(account) {
    return (dispatch, getState) => {
      JSN.then((jsn) => {
        jsn.getFreeToken.call({ from: account }).then((freeAmount) => {
          dispatch(this.setFreeAmount(freeAmount.valueOf()))
        })
      })
    }
  }
}
