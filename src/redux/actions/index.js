export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INC_IF_ODD = 'INC_IF_ODD';
export const CHANGE_BTN_STYLE = 'CHANGE_BTN_STYLE';
export const SAVE_INTERVAL_ID = 'SAVE_INTERVAL_ID';
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';
export const ADD_ITEM = 'ADD_ITEM';
export const CHANGE_ITEM_ID = 'CHANGE_ITEM_ID';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SORT_ARRAY = 'SORT_ARRAY';

export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const incIfOdd = () => {
    return {
        type: INC_IF_ODD
    };
};

export const changeBtnStyle = () => {
    return {
        type: CHANGE_BTN_STYLE
    };
};

export const saveIntervalId = id => {
    return {
        type: SAVE_INTERVAL_ID,
        id: id
    };
};

export const changeInputText = text => {
    return {
        type: CHANGE_INPUT_TEXT,
        text: text
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        item: item
    };
};

export const changeItemId = () => {
    return {
        type: CHANGE_ITEM_ID
    };
};

export const deleteItem = id => {
    return {
        type: DELETE_ITEM,
        id: id
    };
};

export const sortArray = direction => {
    return {
        type: SORT_ARRAY,
        direction: direction
    }
}

