import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";

// Containers
import Image from "components/Template/Image";
import EntryHandler from "components/Template/EntryHandler";

export const project_content_formatter = (type, options) => {
  if (type === "intro") {
    return {};
  } else if (type === "main") {
    return {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => (
          <Image img={node} options={options} />
        ),
        [BLOCKS.EMBEDDED_ENTRY]: (node) => (
          <EntryHandler entry={node} options={options} />
        )
      }
    };
  }
};
