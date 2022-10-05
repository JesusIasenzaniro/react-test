const initialState = {
    amount: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_1':
            return {
                ...state,
                amount: state.amount + 10,
            };

        case 'ACTION_2':
            return {
                ...state,
                amount: state.amount - 10,
            };

        default:
            return state;
    }
};
