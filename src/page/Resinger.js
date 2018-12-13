import React from 'react';
import styled from 'styled-components';
import Input from '../conponents/Input.js';
import Button from '../conponents/Button.js';

const Wrapper = styled.div`
    width: 500px;
    border: 1px solid ;
    height: 350px;
    margin-left: 470px;
    margin-top: 50px;
    border-radius: .25rem;
`
const Btn_input = styled.div`
    margin-top: 30px;
    margin-left: 8px;
`
const FormTest = ({
    email,
    onChangeEmail,
    onChangePwd,
    pwd,
    phone,
    onChangePhone,
    onSubmit,
    onChange

}) => (
    <Wrapper>
        <Btn_input>
            <Input
                label = "Email:"
                type="Email"
                onChange = {email.onChange}
                placeholder={" your Email"}
                validate={{
                    required: true,
                    email: true
                }}
                isDirty={email.isDirty} 
                value={email.value} 
            />
            <Input
                label = "Password:"
                type="Password"
                onChange = {pwd.onChange}
                placeholder={" your Password"}
                validate={{
                    required: true,
                    pwd: true
                }}
                isDirty={pwd.isDirty} 
                value={pwd.value} 
            />
            <Input
                label = "Phone:"
                type="number"
                onChange = {phone.onChange}
                placeholder={" your Phone"}
                validate={{
                    required: true,
                    phone: true
                }}
                isDirty={phone.isDirty} 
                value={phone.value} 
                
            />
            <Button 
             name="Resinger"
             onClick = {onSubmit}

            />
        </Btn_input>
    </Wrapper>

)

class From extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: {
                value: "",
                isDirty: false,
                valid: false
            },
            pwd: {
                value: "",
                isDirty: false,
                valid: false
            },
            phone : {
                value: "",
                isDirty: false,
                valid: false
            },

            autoCompleteResult: [],
        }
    }

    onChange = (event, valid, name) => {
        this.setState({
            [name]: {
                ...this.state[name],
                value: event.target.value,
                isDirty: true,
                valid: valid
            }
        })
    }

    onSubmit = () =>  {
        console.log("Resinger Sussion")
    }

render() {
    return(
        <FormTest
        email={{
            ...this.state.email,
            onChange: (e, valid) => this.onChange(e, valid, 'email'),
         }}
         pwd={{
            ...this.state.pwd,
            onChange: (e, valid) => this.onChange(e, valid, 'pwd'),
         }}
         phone={{
            ...this.state.phone,
            onChange: (e, valid) => this.onChange(e, valid, 'phone'),
         }}
        onSubmit = {this.onSubmit}
        onChangeEmail={e => this.onChange(e, 'email')}
        onChangePwd={e => this.onChange(e, 'pwd')}
        onChangePhone={e => this.onChange(e, 'phone')}
        
        />
    )
 }
}

export default From;