const textb = document.getElementById("textbox");
const button = document.getElementById("submit");
const notesDiv = document.querySelector('.notes'); // Select the notes div

button.addEventListener('click', () => {
    const text = textb.value.trim(); // Get the value from the text box

    if (text) { // Check if the text is not empty
        const noteContainer = document.createElement('div'); // Create a container for the note and button
        noteContainer.classList.add('note-container');
        const newNote = document.createElement('h2'); // Create a new h2 element
        newNote.textContent = text; // Set the text content to the input value
        
        const deleteButton = document.createElement('button'); // Create a delete button
        deleteButton.textContent = 'Delete'; // Set button text
        deleteButton.addEventListener('click', () => {
            notesDiv.removeChild(noteContainer); // Remove the note container when button is clicked
        });

        noteContainer.appendChild(newNote); // Append the h2 to the note container
        noteContainer.appendChild(deleteButton); // Append the delete button to the note container
        notesDiv.appendChild(noteContainer); // Append the note container to the notes div

        textb.value = ''; // Clear the input box after adding the note
    }
});
