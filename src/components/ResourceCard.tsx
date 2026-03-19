import '../styles/ResourceCard.css';
import { type Resource } from '../types/types.ts';

function ResourceCard(props: Resource) {

    return (
        <div className="card-container">

            <h3>{props.name}</h3>
            <p>{props.services}</p>

            {(props.contact.phone != "" || props.contact.help_phone != "" || props.contact.email != "" || props.contact.website != "") && <h6 className='card-contact-header'>Contact Information</h6>}
            <div className="card-contact">
                {props.contact.phone != "" && <p>Phone: {props.contact.phone}</p>}
                {props.contact.help_phone != "" && <p>Help Phone: {props.contact.help_phone}</p>}
                {props.contact.email != "" && <p>Email: {props.contact.email}</p>}
                {props.contact.website != "" && <a href={props.contact.website} target='_blank'>Website</a>}
            </div>

            {(props.address != "" || props.hours != "") && <h6 className='card-opinfo-header'>Operation Info</h6>}
            <div className="card-opinfo">
                {props.address != "" && <p>Address: {props.address}</p>}
                {props.hours != "" && <p>Hours: {props.hours}</p>}
            </div>

        </div>
    );
}

export default ResourceCard;