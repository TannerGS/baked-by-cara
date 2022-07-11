import emailjs from '@emailjs/browser';

export const sendEmail = (customer, order) => {
    emailjs.init(process.env.REACT_APP_USER_ID);
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        name: customer.name,
        address: customer.address,
        phone: customer.phone,
        email: customer.email,
        orderId: order.orderId,
        customerId: order.customerId,
        product: order.product,
        quantity: order.quantity,
        contact: order.contact,
        payment: order.payment,
      },
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
}