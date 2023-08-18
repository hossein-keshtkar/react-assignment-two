import React from "react";
import { marked } from "marked";

import "./App.css";
import { data } from "./data";

function App() {
  const [content, setContent] = React.useState(data);
  const preview = React.useRef();

  React.useEffect(() => {
    const result = marked.parse(content);
    preview.current.innerHTML = result;
  }, [content]);

  return (
    <div className="App">
      <div className="bar">Editor</div>
      <textarea
        id="editor"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      <div id="preview" ref={preview}></div>
    </div>
  );
}

export default App;
