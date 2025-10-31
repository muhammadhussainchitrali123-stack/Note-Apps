const addNoteBtn = document.getElementById("addNoteBtn");
const noteText = document.getElementById("noteText");
const notesContainer = document.getElementById("notesContainer");


document.addEventListener("DOMContentLoaded", showNotes);

addNoteBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text === "") {
    alert("Please write something before adding!");
    return;
  }


  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(text);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteText.value = "";
  showNotes();
});

function showNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
      ${note}
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
