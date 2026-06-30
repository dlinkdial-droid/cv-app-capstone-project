import React from 'react';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faSkype } from '@fortawesome/free-brands-svg-icons';
import './Address.scss';
import AddressItem from './AddressItem/AddressItem';

const Address = () => {
    const contacts = [
        { id: 'phone', icon: faPhone, link: <a href="tel:+500342242">500 342 242</a> },
        { id: 'email', icon: faEnvelope, link: <a href="mailto:office@kamsolutions.pl">office@kamsolutions.pl</a> },
        { id: 'twitter', icon: faTwitter, label: 'Twitter', link: <a href="https://twitter.com/wordpress" target="_blank" rel="noopener noreferrer">https://twitter.com/wordpress</a> },
        { id: 'facebook', icon: faFacebook, label: 'Facebook', link: <a href="https://www.facebook.com/facebook" target="_blank" rel="noopener noreferrer">https://facebook.com/facebook</a> },
        { id: 'skype', icon: faSkype, label: 'Skype', link: <a href="skype:kamsolutions.pl?chat">kamsolutions.pl</a> }
    ];

    return (
        <section className="address-section">
            <h2 className="address-section__title">Contacts</h2>
            <address className="address">
                {contacts.map((item) => (
                    <AddressItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        link={item.link}
                    />
                ))}
            </address>
        </section>
    );
};

export default Address;