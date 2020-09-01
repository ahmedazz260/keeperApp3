import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange() {}
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button
          onClick={(event) => {
            props.onAdd(input);
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
