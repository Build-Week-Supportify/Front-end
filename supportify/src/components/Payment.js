import React from 'react'
import CardReactFormContainer from 'card-react';

export default function Payment() {
    return (
        <div>
            <CardReactFormContainer

                
                container="card-wrapper" // required

                formInputsNames={
                {
                    number: 'CCnumber', 
                    expiry: 'CCexpiry',
                    cvc: 'CCcvc', 
                    name: 'CCname'
                }
                }

                initialValues= {
                {
                    number: '4242424242424242', // optional — default •••• •••• •••• ••••
                    cvc: '123', // optional — default •••
                    expiry: '16/12', // optional — default ••/••
                    name: 'Random Name' // optional — default FULL NAME
                }
                }

                classes={
                {
                    valid: 'valid-input', // optional — default 'jp-card-valid'
                    invalid: 'invalid-input' // optional — default 'jp-card-invalid'
                }
                }

                formatting={true} // optional - default true
                >
                <div id="card-wrapper"></div>

                <form>
                <input placeholder="Full name" type="text" name="CCname" />
                <input placeholder="Card number" type="text" name="CCnumber" />
                <input placeholder="MM/YY" type="text" name="CCexpiry" />
                <input placeholder="CVC" type="text" name="CCcvc" />
                <button className='waves-effect waves-light btn'>Submit</button>
                </form>

                </CardReactFormContainer>

        </div>
    )
}