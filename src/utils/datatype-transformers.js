export const sanitize_journal_entries = (entries) => {
  const amount_entries = entries.length;
  let years = [];
  let entries_formatted = [];
  for (let i = 0; i < entries.length; i++) {
    const year_index = years.indexOf(entries[i].node.year);
    if (year_index !== -1) {
      entries_formatted[year_index].push(entries[i]);
    } else {
      years.push(entries[i].node.year);
      entries_formatted.push([entries[i]]);
    }
  }
  return [entries_formatted, amount_entries];
};

export const sanitize_entry = (entry) => {
  const { name } = entry.node;
  const tags = entry.node.tags.split(" ");
  const img = entry.node.img;
  const img_alt = entry.node.img.title;

  return [name, tags, img, img_alt];
};

// const sanitize_project = (project) => {

// }
