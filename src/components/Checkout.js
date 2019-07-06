import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from 'react-bootstrap/Button';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.onToken = this.onToken.bind(this);
    }

    onToken(token) {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        });
    }

    render() {
        return (
            <StripeCheckout
                name="We Do"
                description={this.props.description || 'Complete task'}
                panelLabel="Pay"
                amount={this.props.amount || 2000}
                currency="GBP"
                token={this.onToken}
                stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
            >
                <Button className="get-it-done-button">Get it done</Button>
            </StripeCheckout>
        )
    }
}