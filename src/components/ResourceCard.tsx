import '../styles/ResourceCard.css';
import { type Resource } from '../types/types.ts';

function ResourceCard(props: Resource) {

    return (
        <div className="card-container">

            <h3>{props.name}</h3>
            <p>{props.services}</p>

            {(props.contact.phone != "" || props.contact.help_phone != "" || props.contact.email != "" || props.contact.website != "") ? <h6 className='card-contact-header'>Contact Information</h6> : null}
            <div className="card-contact">
                {props.contact.phone != "" ? <p>Phone: {props.contact.phone}</p> : null}
                {props.contact.help_phone != "" ? <p>Help Phone: {props.contact.help_phone}</p> : null}
                {props.contact.email != "" ? <p>Email: {props.contact.email}</p> : null}
                {props.contact.website != "" ? <a href={props.contact.website} target='_blank'>Website</a> : null}
            </div>

            {(props.address != "" || props.hours != "") ? <h6 className='card-opinfo-header'>Operation Info</h6> : null}
            <div className="card-opinfo">
                {props.address != "" ? <p>Address: {props.address}</p> : null}
                {props.hours != "" ? <p>Hours: {props.hours}</p> : null}
            </div>

        </div>
    );
}

export default ResourceCard;