const isQualified = (teamScore, qualifyScore) => {
  let result = teamScore > qualifyScore ? "Qualified" : "Disqualified";
  return result;
};

export default isQualified;
