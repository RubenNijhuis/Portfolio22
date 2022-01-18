import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "components/Template/Image";

export const project_content_formatter = {
  intro: {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    },
  },
  content: {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Image img={node} />,
    },
  },
};
