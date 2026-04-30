const generateWorksByYearData = (data) => {
  const worksByYear = {};
  data.forEach((work) => {
    if (work.year) {
      if (!worksByYear[work.year]) {
        worksByYear[work.year] = [];
      }
      let instrumentationArray;
      if (work.instrumentation) {
        const instrumentation = work.instrumentation;
        instrumentationArray = instrumentation.split(",");
      }
      work.instrumentation = instrumentationArray;
      worksByYear[work.year].push(work);
    }
  });
  return worksByYear;
};

export default generateWorksByYearData;
