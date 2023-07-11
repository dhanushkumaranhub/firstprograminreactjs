import isQualified from "./isQualified.mjs";

const teamData = { team: "Rex", score: 10 };

const qualifyScore = 11;

console.log(isQualified(teamData.score, qualifyScore));
