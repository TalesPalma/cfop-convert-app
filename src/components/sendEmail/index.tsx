import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import './SendEmail.css';

export const SendEmail = () => {


  const myServiceId = "YOUR_SERVICE_ID";
  const myTemplateId = "YOUR_TEMPLATE_ID";
  const myPublicKey = "YOUR_PUBLIC_KEY";

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(myServiceId, myTemplateId, form.current, {
        publicKey: myPublicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mensagem enviada com sucesso!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="title">Envie sua mensagem ou sugestão</h2>
        <input type="text" name="user_name" placeholder='Digite seu nome' required />
        <input type="email" name="user_email" placeholder='Digite seu email' required />
        <textarea name="message" placeholder='Digite sua mensagem' required />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
