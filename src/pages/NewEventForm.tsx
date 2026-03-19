import { motion } from 'motion/react';

import Nav from '../components/Nav.tsx';
import Footer from '../components/Footer.tsx';

import '../styles/requestForm.css';

function NewEventForm() {
    function addNewEvent(formData: FormData) {
        console.log(Object.fromEntries(formData));
        alert("Submitted!")
    }

    return (
        <>
            <Nav />

            <form className="form" action={addNewEvent}>

                <h4 className='form-title'>New Event</h4>

                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />

                <label htmlFor="decription">Description:</label>
                <textarea name="description" required ></textarea>

                <label htmlFor="time">Time:</label>
                <input type="text" name="time" />

                <label htmlFor="address">Address:</label>
                <input type="text" name="address" />

                <label htmlFor="entry_cost">Cost to Enter:</label>
                <input type="text" name="entry_cost" />

                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Submit</motion.button>
            </form>

            <Footer />
        </>
    )
}

export default NewEventForm;