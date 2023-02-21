/** @format */

import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
	const [expandEditor, setExpandEditor] = useState(true);
	const [expandPreviewer, setExpandPreviewer] = useState(true);
	const defaultText = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
	if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
	return multiLineCode;
	}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
	- Some are bulleted.
		- With different indentation levels.
		- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

	const [text, setText] = useState(defaultText);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	function createMarkup() {
		return { __html: marked(text, { breaks: true }) };
	}

	function DisplayMarked() {
		return (
			<div
				id={expandEditor ? `preview` : `preview maximize`}
				dangerouslySetInnerHTML={createMarkup()}
			/>
		);
	}

	return (
		<div className="App">
			{expandPreviewer ? (
				<div className="editorDiv">
					<div className="topBar">
						<span>
							<i class="fa-lg fa-solid fa-pen-to-square"></i>
							Editor
							<button
								className={
									expandEditor
										? `fa-lg fa-solid fa-maximize floatRight button`
										: `fa-lg fa-solid fa-minimize floatRight button`
								}
								onClick={() => setExpandEditor(!expandEditor)}
							></button>
						</span>
					</div>
					<textarea
						className={expandEditor ? `` : `maximize`}
						id="editor"
						value={text}
						onChange={handleChange}
					></textarea>
				</div>
			) : null}

			{expandEditor ? (
				<div className="previewerDiv editorDiv">
					<div className="topBar">
						<span>
							<i className="fa-lg fa-solid fa-pen-to-square"></i>
							Previewer
							<button
								className={
									expandPreviewer
										? `fa-lg fa-solid fa-maximize floatRight button`
										: `fa-lg fa-solid fa-minimize floatRight button`
								}
								onClick={() =>
									setExpandPreviewer(!expandPreviewer)
								}
							></button>
						</span>
					</div>
					{DisplayMarked()}
				</div>
			) : null}
		</div>
	);
}

export default App;
