import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddressItem.scss';

const AddressItem = ({ icon, label, link }) => {
    return (
        <dl className="address__item">
            <dt className="address__icon">
                <FontAwesomeIcon icon={icon} />
            </dt>
            <dd className="address__details">
                {label ? (
                    // Сценарий для соцсетей: Заголовок жирный, ссылка обычная
                    <>
                        <strong className="address__label">{label}</strong>
                        <br />
                        {link}
                    </>
                ) : (
                    // Сценарий для телефона/почты: Ссылка жирная сама по себе
                    <span className="address__link-bold">{link}</span>
                )}
            </dd>
        </dl>
    );
};

export default AddressItem;