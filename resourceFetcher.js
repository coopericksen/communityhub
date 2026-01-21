const resource_container = document.getElementById("resource-container");

async function fetchData() {
    try {
        const jsonData = await fetch("./data/resources.json");
        const parsedData = await jsonData.json();
        return parsedData;
    } catch (error) {
        console.log(error)
    }
}

function createSubEl(parent_element, type, param="", param_allow_empty=true, classes=[]) {

    if (!param_allow_empty && param == "") {
        return
    }

    let element = document.createElement(type);
    element.textContent = param;

    classes.forEach(class_to_add => {
        element.classList.add(class_to_add);
    });

    parent_element.appendChild(element)
    return element;

}

async function loadElements() {
    const data = await fetchData();

    data.forEach(resource => {
        const element = createSubEl(resource_container, "div", "", true, ["resource"]);
        const name = createSubEl(element, "h1", resource.name);

        const services = createSubEl(element, "p", resource.services, false);

        if (resource.address != "" || resource.hours != "") {
            const details = createSubEl(element, "div", "", true, ["resource-details"]);
            const address = createSubEl(details, "p", resource.address, false);
            const hours = createSubEl(details, "p", resource.hours, false);
        }

        const reach_out = createSubEl(element, "div", "", true, ["resource-reach-out"]);
        const contact = createSubEl(reach_out, "p", resource.contact, false);
        const contact_title = createSubEl(reach_out, "p", resource.contact_title, false);
        const phone_number = createSubEl(reach_out, "p", resource.phone_number, false);
        const help_phone_number = createSubEl(reach_out, "p", resource.help_phone_number, false);
        const email = createSubEl(reach_out, "p", resource.email, false);

    });
}

loadElements();