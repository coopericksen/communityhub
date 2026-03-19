import { motion } from 'motion/react';

import '../styles/Card.css';
import { type Resource } from '../types/types.ts';

function ResourceCard(props: Resource) {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }} 
            viewport={{ once: false, amount: 0.1 }} 

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="card-container"
        >

            <h3>{props.name}</h3>

            <p>{props.services}</p>

            <hr />

            {(props.contact.phone != "" || props.contact.help_phone != "" || props.contact.email != "" || props.contact.website != "") ? <h6 className='card-header'>Contact Information</h6> : null}
            <div className="card-contact">
                {props.contact.phone != "" ? <p>Phone: {props.contact.phone}</p> : null}
                {props.contact.help_phone != "" ? <p>Help Phone: {props.contact.help_phone}</p> : null}
                {props.contact.email != "" ? <p>Email: {props.contact.email}</p> : null}
                {props.contact.website != "" ? <a href={props.contact.website} target='_blank'>Website</a> : null}
            </div>

            {(props.address != "" || props.hours != "") ? <h6 className='card-header'>Operation Info</h6> : null}
            <div className="card-opinfo">
                {props.address != "" ? <p>Address: {props.address}</p> : null}
                {props.hours != "" ? <p>Hours: {props.hours}</p> : null}
            </div>

        </motion.div>
    );
}

export default ResourceCard;