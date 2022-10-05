import React from 'react';
import {
    action1,
    action2,
} from '../../store/yourActionName/action';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        amount: state.yourReducerName.amount,
    };
};

const Counter = ({ action1, action2, amount }) => {
    return (
        <main>
            <header>
                <h1>{amount}</h1>
            </header>
            <section>
                <button onClick={() => action1()}>
                    Deposit 10
                </button>
                <button onClick={() => action2()}>
                    Withdraw 10
                </button>
            </section>
        </main>
    );
};

export default connect(mapStateToProps, {
    action1,
    action2,
})(Counter);
