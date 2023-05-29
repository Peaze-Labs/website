import React from "react";
import { Highlight, themes } from "prism-react-renderer";

interface Props {
  code: string;
}

export function CodeBlock({ code }: Props) {
  return (
    <div className="p-6 rounded-lg bg-[#F8F8F8] mt-4">
      <Highlight theme={themes.vsLight} code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={{ ...style, background: "transparent" }}
            className="md:text-sm text-[10px]"
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
