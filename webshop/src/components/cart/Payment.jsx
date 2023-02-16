import Button from 'react-bootstrap/Button';

function Payment(props) {

    const pay = () => {
        const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
        const paymentData = {

            "api_username": "c2fef0ae34306f81", // NEED VAJA MUUTA KUI OMA KONTO SAAN
            "account_name": "EUR3D1",
            "amount": props.sum,
            "order_reference": Math.random() * 9999,
            "nonce": "m1293a" + new Date() + Math.random() * 9999,
            "timestamp": new Date(),
            "customer_url": "https://milygear.web.app/"

        };
        const paymentHeaders = {
            "Authorization": "Basic YzJmZWYwYWUzNDMwNmY4MTpkYmVhYTQ0MTA0ZDgwYTZmZTM1YzU4ZDgyZjk0ZGU1NQ==", // NEED VAJA MUUTA KUI OMA KONTO SAAN
            "Content-Type": "application/json"
        };

        fetch(paymentUrl, { "method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders })
            .then(res => res.json())
            .then(json => window.location.href = json.payment_link);
    }

    return (

        <Button variant="success" onClick={pay}>Checkout & Pay</Button>
    )
}

export default Payment