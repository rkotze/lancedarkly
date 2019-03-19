import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-GB");

export function RelativeTimeStamp({ dateNumber }) {
  const date = new Date(dateNumber);
  return (
    <time title={date.toString()} datetime={date.toISOString()}>
      {timeAgo.format(date)}
    </time>
  );
}
