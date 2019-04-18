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

  sort(filterParams) {
    this.filterParams = Object.assign({}, this.filterParams, filterParams);
    const {
      sortBy: { created }
    } = this.filterParams;

    const sortBy =
      created === DATE.OLDEST ? createSortOldest : createSortNewest;

    return [].concat(this.toggles).sort(sortBy);
  }
}

function createSortNewest(a, b) {
  const createdA = a.creationDate;
  const createdB = b.creationDate;
  if (createdA > createdB) return -1;

  if (createdA < createdB) return 1;
  return 0;
}

function createSortOldest(a, b) {
  const createdA = a.creationDate;
  const createdB = b.creationDate;
  if (createdA < createdB) return -1;

  if (createdA > createdB) return 1;

  return 0;
}
