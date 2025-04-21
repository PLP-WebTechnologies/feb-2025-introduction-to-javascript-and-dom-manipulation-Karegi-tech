document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const textElement = document.getElementById('dynamicText');
    const changeTextButton = document.getElementById('changeTextButton');

    changeTextButton.addEventListener('click', function() {
        textElement.textContent = 'The text has been dynamically changed!';
    });

    // Task 2: Modify CSS styles via JavaScript
    const styledElement = document.getElementById('styledElement');
    const styleButton = document.getElementById('styleButton');

    styleButton.addEventListener('click', function() {
        styledElement.style.backgroundColor = 'lightblue';
        styledElement.style.color = 'darkblue';
        styledElement.style.borderRadius = '5px';
        styledElement.style.padding = '15px';
    });

    // Task 3: Add or remove an element when a button is clicked
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');
    let newElement = null;

    addElementButton.addEventListener('click', function() {
        if (!newElement) {
            newElement = document.createElement('p');
            newElement.textContent = 'A newly added paragraph!';
            newElement.id = 'newlyAdded';
            elementContainer.appendChild(newElement);
        }
    });

    removeElementButton.addEventListener('click', function() {
        const addedElement = document.getElementById('newlyAdded');
        if (addedElement) {
            elementContainer.removeChild(addedElement);
            newElement = null; // Reset so it can be added again
        }
    });
});