import { getImage } from "gatsby-plugin-image";

export const sanitize_journal_entries = (entries) => {
  const amount_entries = entries.length;
  let years = [];
  let entries_formatted = [];

  for (let i = 0; i < entries.length; i++) {
    const year_index = years.indexOf(entries[i].year);
    if (year_index !== -1) {
      entries_formatted[year_index].push(entries[i]);
    } else {
      years.push(entries[i].year);
      entries_formatted.push([entries[i]]);
    }
  }

  return [entries_formatted, amount_entries];
};

// Take in journal entry and transform to a usable format
export const sanitize_entry = (entry) => {
  const { name } = entry;
  const tags = entry.tags.split(" ");
  const img = entry.img;
  const img_alt = entry.img.title;

  return { name, tags, img, img_alt };
};

// Sanitize project
export const sanitize_project = (project) => {
  const { name } = project;
  const tags = project.tags.split(" ");
  const description = project.description;
  const img = getImage(project.backgroundImg);
  const img_alt = project.backgroundImg.title;

  return { name, tags, description, img, img_alt };
};
