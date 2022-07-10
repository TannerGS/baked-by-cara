import emailjs from '@emailjs/browser';

export const sendEmail = (content) => {
    console.log(content)
    emailjs.init(process.env.REACT_APP_USER_ID);
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      content,
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
}