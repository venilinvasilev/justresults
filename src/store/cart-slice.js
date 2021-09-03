const initialState = {
    active: false,
    activeModal: false,
    changed: false,
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartActions = {
    SET_USER_CART: 'SET_USER_CART',
    CART_ADD_ITEM: 'CART_ADD_ITEM',
    CART_REMOVE_ITEM: 'CART_REMOVE_ITEM',
    CART_DECREASE_ITEM_COUNT: 'CART_DECREASE_ITEM_COUNT',
    CART_DISPLAY: 'CART_DISPLAY',
    CART_HIDE: 'CART_HIDE',
    CART_MODAL_TOGGLE: 'CART_MODAL_TOGGLE'
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActions.SET_USER_CART: {
            return {
                changed: true,
                ...state,
                ...action.payload
            }
        }
        case cartActions.CART_ADD_ITEM: {
            const items = state.items.slice(0);
            const newItem = action.payload;
            const found = items.find(item => item._id === newItem._id);
            if(found) {
                found.totalQuantity += 1;
                found.totalPrice += newItem.price;
            } else {
                newItem.totalQuantity = 1;
                newItem.totalPrice = newItem.price;
                items.push(newItem);
            }
            return {
                ...state,
                changed: true,
                items,
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + newItem.price
            }

        }
        case cartActions.CART_DECREASE_ITEM_COUNT: {
            let items = state.items.slice(0);
            const removeItem = action.payload;
            const found = items.find(item => item._id === removeItem._id);
            found.totalQuantity -= 1;
            found.totalPrice -= removeItem.price;
            if(found.totalQuantity === 0) items = items.filter(item => item._id !== removeItem._id);
            return {
                ...state,
                changed: true,
                items,
                totalQuantity: state.totalQuantity - 1,
                totalPrice: state.totalPrice - removeItem.price
            }
        }
        case cartActions.CART_REMOVE_ITEM: {
            let items = state.items.slice(0);
            const removeItem = action.payload;
            const foundRemoveItemTotalQuantity = items.find((item) => item._id === removeItem._id).totalQuantity;
            items = items.filter(item => item._id !== removeItem._id);
            return {
                ...state,
                changed: true,
                items,
                totalQuantity: state.totalQuantity - foundRemoveItemTotalQuantity,
                totalPrice: state.totalPrice - removeItem.totalPrice
            }
        }
        case cartActions.CART_DISPLAY: {
            return {
                ...state,
                active: true
            }
        }
        case cartActions.CART_HIDE: {
            return {
                ...state,
                active: false
            }
        }
        case cartActions.CART_MODAL_TOGGLE: {
            return {
                ...state,
                activeModal: !state.activeModal
            }
        }
        default: {
            return state;
        }
    }
}

export default cartReducer;