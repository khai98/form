import React from 'react';
import styled from 'styled-components';

const  Wapper = styled.button`
    color: #FFFFFF;
    background-color: #4CAF50;
    border-color: #FFFFFF;
    border-radius: .25rem;
    height: 37px
    width: 150px;
    margin-left: 170px;
    margin-top: 18px !important;
`

const Button = ({
    onClick,
    name
}) => (
      <Wapper onClick={onClick}>{name}</Wapper>
)

export default Button;