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
  // console.log(line);
  let words = line.split("");
  console.log(words);

  let string = [];

  if (words[0] === "*" && words[1] === "*") {
    for (let i = 2; i < words.length; i++) {
      if (words[i] === "*" && words[i + 1] === "*") {
        const joinedString = string.join("");
        console.log(joinedString);
        console.log(words.slice(9));
        return (
          <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   gap: ".25rem",
          // }}
          >
            <p style={{ fontWeight: "bold" }} index={index}>
              {"  " + joinedString}
            </p>
            {/* {words.slice(i + 2).join("")} */}
          </div>
        );
      }
      string.push(words[i]);
    }
  }

  if ([words[0] === "*"]) {
    for (let i = 1; i < words.length; i++) {
      if (words[i] === "*") {
        const joinedString = string.join("");
        return <p style={{ fontStyle: "italic" }}>{joinedString}</p>;
      }
      string.push(words[i]);
    }
  }

  // if ([words[0] === "["]) {
  //   let url = [];
  //   for (let i = 1; i < words.length; i++) {
  //     if (words[i] === "]") {
  //       const joinedString = string.join("");
  //       return <a href=""></a>;
  //     }
  //     if (word[i] === "(") {
  //       if(url[i+1] === ")"){
  //         cont
  //       }
  //       url.push(words[i + 1]);
  //     }
  //     string.push(words[i]);
  //   }
  // }

  return <p index={index}>{line}</p>;
}
