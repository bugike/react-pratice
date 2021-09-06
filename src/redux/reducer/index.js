import {
    INCREMENT,
    DECREMENT,
    INC_IF_ODD,
    CHANGE_BTN_STYLE,
    SAVE_INTERVAL_ID,
    CHANGE_INPUT_TEXT,
    ADD_ITEM,
    CHANGE_ITEM_ID,
    DELETE_ITEM,
    SORT_ARRAY
} from '../actions';

const initialState = {
    isShown: true,
    count: 0,
    btnText: 'Start',
    btnColor: 'lightgreen',
    intervalID: null,
    inputText: '',
    itemList: [],
    itemId: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: 
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case INC_IF_ODD:
            let change = state.count % 2 === 0 ? 0 : 1;
            return {
                ...state,
                count: state.count + change
            };
        case CHANGE_BTN_STYLE:
            let style = state.btnColor === 'lightgreen' ? 'red' : 'lightgreen';
            let text = state.btnText === 'Start' ? 'Stop' : 'Start';
            return {
                ...state,
                btnColor: style,
                btnText: text
            };
        case SAVE_INTERVAL_ID: 
            return {
                ...state,
                intervalID: action.id
            };
        case CHANGE_INPUT_TEXT:
            return {
                ...state,
                inputText: action.text
            };
        case ADD_ITEM:
            let newList_add = [...state.itemList, action.item];
            return {
                ...state,
                itemList: newList_add
            };
        case CHANGE_ITEM_ID:
            return {
                ...state,
                itemId: state.itemId + 1
            };
        case DELETE_ITEM:
            let newList_delete = state.itemList.filter(item => item.id !== action.id);
            return {
                ...state,
                itemList: newList_delete
            };
        case SORT_ARRAY:
            let sortedArr = [...state.itemList];
            if (action.direction === 'AZ') {
                sortedArr.sort(function(a, b){
                    if(a.text < b.text) { return -1; }
                    if(a.text > b.text) { return 1; }
                    return 0;
                });
            }
            if (action.direction === 'ZA') {
                sortedArr.sort(function(a, b){
                    if(a.text > b.text) { return -1; }
                    if(a.text < b.text) { return 1; }
                    return 0;
                });
            }
            return {
                ...state,
                itemList: sortedArr,
            };
        default: 
            return state;
    }
};

export default reducer;