import React from 'react';
import styled from 'styled-components';
import { type } from 'os';

const Label = styled.label`
     padding: 4px 8px;
     
`
const Value = styled.input.attrs({
    placeholder: props =>  props.placeholder,
    type: "password",
})`
    margin-left: 12px;
    display: block;
    width: 440px;
    margin-left:9px
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;

const Wrapper = styled.div``
const Span = styled.span`
    margin-left:110px
    margin-top:3px
    color:#ff0000
`
const required = (value) => {
    if(!value || value.length === 0 ) return false;
    return true;
}

const email = (value) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

const phone = (value) => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return re.test(value);
}

const onChangeInput = (event, fn, validate) => {
    let value = event.target.value;
    let valid = true;
    if(validate.required && !required(value)) {
        valid = false;
    }
    if(validate.email && !email(value)) {
        valid = false;
    }
    if(validate.phone && !phone(value)) {
        valid = false;
    }
    fn(event, valid);
}

const Input = ({
    label,
    onChange,
    placeholder,
    type,
    validate,
    value,
    isDirty,  
}) => {
        return (
         <Wrapper>
             <Label>
                         {label}{"  "}
                    <Value 
                         type={type}
                         onChange={e=>onChangeInput(e ,onChange, validate)}                       
                         placeholder={placeholder} 
                         value={value}
                    />
            </Label>
            <Span>
                {validate.required && !required(value) && isDirty  ?
                 <span>Required!</span>
                : null}

            </Span>
         </Wrapper>
        )
    }

export default Input;