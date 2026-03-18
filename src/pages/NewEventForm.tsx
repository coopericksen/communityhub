import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';

import '../styles/requestForm.css';

function NewEventForm() {
    function addNewEvent(formData: FormData) {
        const name = formData.get("name");
        console.log(name);
        alert("Submitted!")
    }

    return (
        <>
            <Nav />
            {/* <Banner page='Hub' /> */}

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

                <button>Submit</button>
            </form>
        </>
    )
}

export default NewEventForm;