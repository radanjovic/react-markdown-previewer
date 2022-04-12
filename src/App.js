import Markdown from 'marked-react'; // alternatively, we could have used React Markdown...
import React, { useState } from 'react';

// Since it's a mini-project -all code is written in App/incex.css files

// Defaults
const defaultMarkdown = `
# This is an h1. 
\n ## This is an h2.
\n [This](https://github.com) is a link.
\n This is an inline code: \`<p></p>\`.
\n This is a block of code:
\`\`\`
  <div>
    <p></p>
    <p></p>
  </div>
\`\`\`
\n These are the unordered and ordered lists:
\n
- item1
- item2
\n
1. item1
2. item2
\n > This is a blockquote.
\n This is an image:
\n ![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
\n And this is **some bold text**.
`;

function App() {
  const [text, setText] = useState(defaultMarkdown);

  function handleChange(event) {
    setText(event.target.value);
  }


  return (<>
  <h1 id='title' className='text-center'>Markdown Previewer</h1><br />
  <div className='row'>
    <div className='col-lg-6 text-center'>
      <div>
        <strong>Editor</strong>
      </div><br />
      <textarea onChange={handleChange} id='editor' type='text' value={text} cols='60' rows='45' />
    </div>
    <div className='col-lg-6 text-center'>
      <div>
        <strong>Preview</strong>
      </div><br />
      <div id='preview'>
        <Markdown>{text}</Markdown>
      </div>
    </div>
  </div>
</>)
}

export default App;
