import './ResourceCard.css';
import { type Resource } from '../types/types.ts';

function ResourceCard(props: Resource) {

    return (
        <div className="card-container">

            <h3>{props.name}</h3>
            <p>{props.services}</p>

            <h6 className='card-contact-header'>Contact Information</h6>
            <div className="card-contact">
                <p>Phone: {props.contact.phone}</p>
                <p>Help Phone: {props.contact.help_phone}</p>
                <p>Email: {props.contact.email}</p>
                <a href={props.contact.website}>Website</a>
            </div>

            <h6 className='card-opinfo-header'>Operation Info</h6>
            <div className="card-opinfo">
                <p>Address: {props.address}</p>
                <p>Hours: {props.hours}</p>
            </div>

        </div>
    );
}

export default ResourceCard;