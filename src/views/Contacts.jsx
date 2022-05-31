import './css/Contacts.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope,faMapLocationDot,faDiscord } from '@fortawesome/free-solid-svg-icons'
function Contacts() {
    return (
        <div className="Contacts">
            <p className='ContactsDetails'>
                <FontAwesomeIcon className='contactsFontAwesome' icon={faMapLocationDot} />
                <div style={{paddingLeft: '30px'}}>St Martin's Church Hall, Church Street,<br /> Epsom, Surrey<br />
                KT17 4PX<br />
                Visits by appointment only.
                </div>
                <br />
                <FontAwesomeIcon className='contactsFontAwesome' icon={faPhone} />
                Tel: 07535 796472<br /> <br />
                <FontAwesomeIcon className='contactsFontAwesome' icon={faEnvelope} />
                Email us at:bakerjanice746@gmail.com<br />     
                         
            </p>
            <div  >
                <a className='Discord' href='https://discord.gg/ENmyUcpK' target={'blank'}>
                    <img style={{height: '25px'}} src='https://www.freepnglogos.com/uploads/discord-logo-png/discord-logo-logodownload-download-logotipos-1.png' alt='' />
                    <span> JOIN US AT DISCORDE </span>
                </a>
            </div>
            
                <div>
                <a className='Discord' href=' https://wa.me/whatsappphonenumber' >
                    <img style={{height: '25px'}} src='https://cdn3d.iconscout.com/3d/premium/thumb/whatsapp-4118004-3410042.png' alt='' />
                    <span> JOIN US AT WHATSAPP </span>
                </a>
                </div>
            
            <iframe title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.908157660294!2d-0.2609229842365049!3d51.33120907960647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e2138025ee11%3A0x7e34c1ed3cbb47cd!2sSt%20Martin&#39;s%20Parish%20Church%2C%20Epsom!5e0!3m2!1slv!2suk!4v1653574128986!5m2!1slv!2suk" style={{width: '100%'}} height={450}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <h3>Contact Form</h3>

<div class="container">
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit" />
  </form>
</div>
       </div>
    )
}

export default Contacts;