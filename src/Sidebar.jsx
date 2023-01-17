import React from 'react';

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, body, index) => (
    <div key={note.id}>
      <div
        className={`title flex cursor-pointer items-center overflow-hidden p-4 ${
          note.id === props.currentNote.id ? 'selected-note bg-gray-600' : ''
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4
          className="p-2 mr-auto overflow-hidden text-sm font-normal text-gray-400 text-snippet text-ellipsis whitespace-nowrap "
        >
          {note.body.split('\n')[0]}
        </h4>
        <button
          className="delete-btn"
          onClick={() => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="w-1/5 max-h-screen overflow-y-auto pane sidebar">
      <div className="flex items-center justify-around sidebar--header">
        <h3 className="p-3 text-3xl">Notes</h3>
        <button
          className="w-8 h-8 text-white bg-gray-400 border-none rounded cursor-pointer new-note"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
