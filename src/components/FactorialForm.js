import React, { useState} from 'react';
import { connect } from 'react-redux';
import { AddFactorialResult as AddFactorialResultAction} from '../actions';

function FactorialForm({ AddFactorialResult }) {
    const [number, setNumber] = useState('');

    function handleSubmitFactorial (event) {
        event.preventDefault();
        calculateFactorial()
    }

    function calculateFactorial () {
        var n = number;
        var i = 1;
        var s = 1;
        while (i <= n) s *= i++;
        let singleResult = {number: n, result:s}
        AddFactorialResult(singleResult);
    }
    return (
        <form onSubmit={handleSubmitFactorial}>
        <label>
            <input type="text" name="factorial" placeholder='Wpisz Liczbę' onChange={e => setNumber(parseInt(e.target.value))} />
        </label>
        <input type="submit" value="Oblicz" />
    </form>
    );
}

const mapDispatchToProps = (dispatch) => ({
    AddFactorialResult: (data) => dispatch(AddFactorialResultAction(data)),
    })


export default connect(null, mapDispatchToProps)(FactorialForm);