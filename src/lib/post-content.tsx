import React from "react";
import { cleanHTMLContent } from "./html_clean";

const PostContent = ({ rawContent }) => {
  const cleanedContent = cleanHTMLContent(rawContent);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanedContent }}
      className="cleaned-post-content"
    ></div>
  );
};

export default PostContent;
