const { AGE_CONST, groupByAge } = require("./group-by-age");

describe("Group by age", function() {
  const overYear = { creationDate: new Date(2017, 0, 1) };
  const over6Month = { creationDate: new Date(2018, 5, 1) };
  const over3Month = { creationDate: new Date(2018, 8, 1) };
  const over1Month = { creationDate: new Date(2018, 10, 1) };
  const over1Week = { creationDate: new Date(2018, 11, 3) };
  const lessThan1Week = { creationDate: new Date(2018, 11, 31) };

  const togglesWithDates = [
    overYear,
    over6Month,
    over3Month,
    over1Month,
    over1Week,
    lessThan1Week
  ];

  it("one in each age category", function() {
    const fakeNow = new Date(2019, 0, 1);
    const expected = {
      [AGE_CONST.MONTH]: [over1Month],
      [AGE_CONST.THREE_MONTHS]: [over3Month],
      [AGE_CONST.SIX_MONTH]: [over6Month],
      [AGE_CONST.DAY]: [lessThan1Week],
      [AGE_CONST.WEEK]: [over1Week],
      [AGE_CONST.YEAR]: [overYear]
    };

    const actual = groupByAge(togglesWithDates, fakeNow);
    expect(actual).toEqual(expected);
  });
});
