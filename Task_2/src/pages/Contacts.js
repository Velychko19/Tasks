const Contacts = () => {
    return ( <div className="about section" id="about">
    <h2 className="section-title">Contact</h2>

    <div className="contact__container">
        
        <ul className="contact-list">
            <li className="contact-list__item">
                <h2 className="title-2">Location</h2>
                <p>Cherkasy, Ukraine</p>
            </li>
            <li className="contact-list__item">
                <h2 className="title-2">Telegram / Viber</h2>
                <p><a href="tel:+79051234567">+38 063 534 38 39</a></p>
            </li>
            <li className="contact-list__item">
                <h2 className="title-2">Email</h2>
                <p><a href="velychko2023@gmail.com">velychko2023@gmail.com</a></p>
            </li>
        </ul>                     
    </div>
</div>
);
}
 
export default Contacts;