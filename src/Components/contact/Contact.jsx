import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white from '../../assets/edusity_assets/white-arrow.png'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3036d6fc-7749-46c6-8659-c0d9963944a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }}
  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /> </h3>
        <p>Feel free to reach out through contact from or find our contact information below. your feedback, question and sugeestion are important to us as we strive to provide exceptional service to our univeersity community.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />Contact@Shaguftafatima.dev</li>
          <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
          <li><img src={location_icon} alt="" />918, shastri nagar jaipur, Rajasthan, 302016</li>
        </ul>
      </div>
      <div className="contact-col">
<form onSubmit={onSubmit}>
  <label htmlFor="">Your Name</label>
  <input type="text" name="name" id="" placeholder='Enter your name' required />
  <label htmlFor="">Your Phone number</label>
  <input type="tel" name="phone" placeholder='Enter your mobile number' required id="" />
  <label htmlFor="">Write Your message here</label>
  <textarea name="message"  rows="6" placeholder='Enter your Message here' required></textarea>
  <button type='submit' className='btn dark-btn'>Submit <img src={white} alt="" /></button>
</form>
<span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
