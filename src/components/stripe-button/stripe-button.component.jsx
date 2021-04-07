import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStrip = price * 100;
    const publishableKey =  process.env.REACT_APP_STRIPE_API_KEY;

    console.log('#### START STRIP API KEY #### ')
    console.log('publishableKey :', publishableKey)
    console.log('#### END STRIP API KEY #### ')

    const onToken = token => {
        console.log('#### START STRIP RESPONSE #### ')
        console.log('RESPONSE :', token)
        console.log('#### END STRIP RESPONSE #### ')
    }

    return (
     <StripeCheckout
         label={'Pay Now'}
         name={'MC Clothing Ltd Test.'}
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is ${price}€`}
         amount={priceForStrip}
         panelLabel={'Pay Now 2'}
         token={onToken}
         stripeKey={publishableKey}
     />
    );
}

export default StripeButton;
