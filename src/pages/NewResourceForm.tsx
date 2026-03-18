import Nav from '../components/Nav.tsx';
import Banner from '../components/Banner.tsx';

import '../styles/requestForm.css';

function NewResourceForm() {
    function addNewResource(formData: FormData) {
        const name = formData.get("name");
        console.log(name);
        alert("Submitted!")
    }

    return (
        <>
            <Nav />
            {/* <Banner page='Hub' /> */}

            <form className="form" action={addNewResource}>

                <h4 className='form-title'>New Resource</h4>

                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />

                <label htmlFor="services">Services Provided:</label>
                <textarea name="services" required ></textarea>

                <label htmlFor="phone">Phone Number:</label>
                <input type="text" name="phone" />

                <label htmlFor="help-phone">Help Phone Number:</label>
                <input type="text" name="help-phone" />

                <label htmlFor="email">Email Address:</label>
                <input type="text" name="email" />

                <label htmlFor="website">Website:</label>
                <input type="text" name="website" />

                <label htmlFor="address">Address:</label>
                <input type="text" name="address" />

                <label htmlFor="hours">Hours:</label>
                <input type="text" name="hours" />

                <button>Submit</button>
            </form>
        </>
    )
}

export default NewResourceForm;