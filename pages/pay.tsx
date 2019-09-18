import React from 'react';

class CustomPaymentPage extends React.Component<{ amount: number }> {
    static getInitialProps({ query: { amount } }: { query: { amount: number } }) {
        return { amount }
    }

    render() {
        console.log(this.props.amount)
        return <div>{this.props.amount}</div>
    }
}

export default CustomPaymentPage;
