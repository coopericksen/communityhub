import '../styles/EventCard.css';
import { type Event } from '../types/types.ts';

function EventCard(props: Event) {

    return (
        <div className="card-container">

            <h3>{props.name}</h3>
            <p>{props.description}</p>

            <hr />

            <h6 className='card-info-header'>Event Information</h6>
            <div className='card-info'>
                {props.address != "" && <p>Location: {props.address}</p>}
                {props.time != "" && <p>Time: {props.time}</p>}
                {props.entry_cost != "" && <p>Entry Cost: {props.entry_cost}</p>}
            </div>

        </div>
    );
}

export default EventCard;