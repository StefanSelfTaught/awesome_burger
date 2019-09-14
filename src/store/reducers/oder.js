import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case actionTypes.PURCHASE_BURGER_FINISH:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.DELETE_ORDER_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false
      }
    case actionTypes.DELETE_ORDER_SUCCES:
      const deletedOrder = action.orderId;
      return {
        ...state,
        loading: false,
        orders: state.orders.filter(order => order.id !== deletedOrder)
      }
    default:
      return state;
  }
};

export default reducer;
