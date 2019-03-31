const AGE_CONST = {
  YEAR: "year",
  SIX_MONTH: "6months",
  THREE_MONTHS: "3months",
  MONTH: "1month",
  WEEK: "week",
  DAY: "day"
};

exports.AGE_CONST = AGE_CONST;

function overAge(current, previous) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const msPerWeek = msPerDay * 7;
  const msPerMonth = msPerDay * 30;
  const ms3Month = msPerMonth * 3;
  const ms6Month = msPerMonth * 6;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed > msPerYear) {
    return AGE_CONST.YEAR;
  } else if (elapsed > ms6Month) {
    return AGE_CONST.SIX_MONTH;
  } else if (elapsed > ms3Month) {
    return AGE_CONST.THREE_MONTHS;
  } else if (elapsed > msPerMonth) {
    return AGE_CONST.MONTH;
  } else if (elapsed > msPerWeek) {
    return AGE_CONST.WEEK;
  }

  return AGE_CONST.DAY;
}

function groupByAge(toggles, current) {
  return toggles.reduce((acc, cur) => {
    const ageCategory = overAge(current, cur.creationDate);
    if (Array.isArray(acc[ageCategory])) acc[ageCategory].push(cur);
    else acc[ageCategory] = [cur];

    return acc;
  }, {});
}

exports.groupByAge = groupByAge;
