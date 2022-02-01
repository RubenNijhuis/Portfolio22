import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";

// Containers
import Image from "components/Template/Image";
import EntryHandler from "components/Template/EntryHandler";

export const content_formatter = (type, options) => {
  switch (type) {
    case "intro":
      return {};
    case "main":
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
    case "gallery-full":
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
    case "gallery-small":
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
    default:
      return {};
  }
};
