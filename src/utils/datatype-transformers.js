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
  const tags = entry.tags.split(" | ");
  const img = entry.img;

  return { name, tags, img };
};

// Sanitize project
export const transform_project = (project) => {
  const { name } = project;
  const tags = project.tags.split(" | ");
  const description = project.description;
  const img = project.showcase_img;
  const background = project.background_color;

  return { name, tags, description, img, background };
};
