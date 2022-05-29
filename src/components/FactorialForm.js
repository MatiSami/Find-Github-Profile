import React, { useState} from 'react';
import { connect } from 'react-redux';
import { AddFactorialResult as AddFactorialResultAction} from '../actions';
import styled from 'styled-components'
import { device } from './../assets/styles/devices';

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
        <Form onSubmit={handleSubmitFactorial}>
            <FormItem>
               <Input type="number" name="factorial" required onChange={e => setNumber(parseInt(e.target.value))} />
               <Label htmlFor="username">Wpisz liczbę</Label>                               
            </FormItem>
            <input type="submit" value="Oblicz" />
    </Form>
    );
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

    @media ${device.laptop} {
        flex-direction: row;
        max-width: 70%;
        margin: 40px auto;
        justify-content: space-between;
        padding: 0 50px 0 30px;
    }
`

const FormItem = styled.div`
    position: relative;
`

const Input = styled.input`
        display: block;
        height: 40px;
        width: 200px;
        background: var(--black);
        border: solid 1px var(--gray);
        transition: all .3s ease;
        padding: 14px;
        color: var(--white);

        @media ${device.laptop} {
            margin-bottom: 0;
        }

        &:focus {
        border-color: var(--primary)
        }

        ${FormItem} &:focus + label,
        ${FormItem} &:valid + label{
        font-size: 11px;
        top: -5px
    }
    @media ${device.laptop} {
            width: 500px;
        }
`

const Label = styled.label`
        position: absolute;
        cursor: text;
        z-index: 2;
        top: 11px;
        left: 10px;
        font-size: 14px;
        font-weight: bold;
        background: var(--black);
        padding: 0 10px;
        color: var(--gray);
        transition: all .3s ease
`

const mapDispatchToProps = (dispatch) => ({
    AddFactorialResult: (data) => dispatch(AddFactorialResultAction(data)),
    })


export default connect(null, mapDispatchToProps)(FactorialForm);