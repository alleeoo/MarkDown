export default function ConvertText({ text }) {
  return (
    <div id="container">
      <RenderContent text={text} />
    </div>
  );
}

function RenderContent({ text }) {
  // console.log("Text: ", text);

  const lines = text.split("\n");

  // console.log("lines", lines);

  return (
    <>
      {lines.map((line, index) => {
        const trimmed = line.trim();

        if (trimmed === "") {
          return null;
        }

        let level = 0;

        while (level < trimmed.length && trimmed[level] === "#") {
          level++;
        }

        // console.log("Level: ", level);
        // console.log("trimmed[level]: ", trimmed[level]);

        const isHeader = trimmed[level] === " ";

        const content = isHeader ? trimmed.slice(level + 1) : trimmed;

        switch (level) {
          case 1:
            return <h1 key={index}>{content}</h1>;
          case 2:
            return <h2 key={index}>{content}</h2>;
          case 3:
            return <h3 key={index}>{content}</h3>;
          case 4:
            return <h4 key={index}>{content}</h4>;
          case 5:
            return <h5 key={index}>{content}</h5>;
          case 6:
            return <h6 key={index}>{content}</h6>;
          default:
            return <CheckLine line={line} index={index} />;
        }
      })}
    </>
  );
}

function CheckLine({ line, index }) {
  const words = line.split("");
  const elements = [];

  let tempText = [];
  let i = 0;

  while (i < words.length) {
    if (words[i] === "*" && words[i + 1] === "*") {
      i += 2;
      const boldText = [];

      while (i < words.length && !(words[i] === "*" && words[i + 1] === "*")) {
        boldText.push(words[i]);
        i++;
      }
      i += 2;
      elements.push(<strong key={elements.length}>{boldText.join("")}</strong>);
    } else if (words[i] === "*") {
      i++;
      const italianText = [];

      while (i < words.length && words[i] !== "*") {
        italianText.push(words[i]);
        i++;
      }
      i++;
      elements.push(<em key={elements.length}>{italianText.join("")}</em>);
    } else if (words[i] === "[") {
      i++;

      const urlText = [];

      while (i < words.length && words[i] !== "]") {
        urlText.push(words[i]);
        i++;
      }
      i++;

      if (words[i] === "(") {
        i++;
        const urlLink = [];
        while (i < words.length && words[i] !== ")") {
          urlLink.push(words[i]);
          i++;
        }
        i++;
        urlLink.unshift("https://");
        elements.push(
          <a key={elements.length} href={urlLink.join("")}>
            {urlText.join("")}
          </a>
        );
      }
    } else {
      tempText.push(words[i]);
      i++;
    }
  }

  if (tempText.length > 0) {
    elements.unshift(<span key="text">{tempText.join("")}</span>);
  }

  return <p key={index}>{elements}</p>;
}
