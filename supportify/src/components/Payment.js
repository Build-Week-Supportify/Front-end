import React from 'react'
import CardReactFormContainer from 'card-react';

export default function Payment() {
    return (
        <div>
            <CardReactFormContainer

                container = 'card-wrapper' 
                formInputsNames = {
                {
                    number: 'CCnumber', 
                    expiry: 'CCexpiry',
                    cvc: 'CCcvc', 
                    name: 'CCname'
                }
                }

                initialValues = {
                {
                    number: '4242424242424242', 
                    cvc: '123', 
                    expiry: '16/12', 
                    name: 'Random Name' 
                }
                }

                classes = {
                {
                    valid: 'valid-input', 
                    invalid: 'invalid-input' 
                }
                }

                formatting = {true} 
                >
                <div id = 'card-wrapper'></div>

                <form>
                <input placeholder = 'Full name' type = 'text' name = 'CCname' />
                <input placeholder = 'Card number' type = 'text' name = 'CCnumber' />
                <input placeholder = 'MM/YY' type = 'text name' name = 'CCexpiry' />
                <input placeholder = 'CVC type' type = 'text name' name = 'CCcvc' />
                <button className = 'waves-effect waves-light btn'>Submit</button>
                </form>

                </CardReactFormContainer>

        </div>
    )
}