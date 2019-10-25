import React from 'react'
 import CardReactFormContainer from 'card-react';

export default function Payment() {
    return (
        <div>
            <CardReactFormContainer

                
                container="card-wrapper" 
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
                    number: '555555555555555', 
                    cvc: '123', 
                    expiry: '10/24', 
                    name: 'Random Name' 
                }
                }

                classes={
                {
                    valid: 'valid-input', 
                    invalid: 'invalid-input' 
                }
                }

                formatting={true} 
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
export default Payment;