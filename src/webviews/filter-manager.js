export const DATE = {
  OLDEST: "oldest",
  NEWEST: "newest"
};

export class FilterManager {
  constructor(toggles) {
    this.toggles = toggles;
    this.filterParams = {
      filterText: "",
      sortBy: {
        created: DATE.OLDEST
      }
    };
  }

  filter(filterParams) {
    this.filterParams = Object.assign({}, this.filterParams, filterParams);

    const { filterText } = this.filterParams;

    return this.toggles.filter(toggle => {
      const searchableText = [toggle.name, toggle.description, toggle.key]
        .join(" ")
        .toLowerCase();
      return searchableText.includes(filterText);
    });
  }
}
