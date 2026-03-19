import { motion } from 'motion/react';

import '../styles/EventCard.css';
import { type Event } from '../types/types.ts';

function EventCard(props: Event) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }} 
            viewport={{ once: false, amount: .2 }} 

            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="card-container"
        >

            <h3>{props.name}</h3>

            <p>{props.description}</p>

            <hr />

            <h6 className='card-info-header'>Event Information</h6>
            <div className='card-info'>
                {props.address != "" ? <p>Location: {props.address}</p> : null}
                {props.time != "" ? <p>Time: {props.time}</p> : null}
                {props.entry_cost != "" ? <p>Entry Cost: {props.entry_cost}</p> : null}
            </div>

        </motion.div>
    );
}

export default EventCard;