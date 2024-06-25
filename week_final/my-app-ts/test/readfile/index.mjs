import fs from "fs";
console.log("123");

(() => {
  let apiData = "";

  console.log(`>>>>${process.cwd()}/test/api/items/fakeData.json`);
  fs.readFile(
    `${process.cwd()}/api/items/fakeData.json`,
    "utf8",
    (err, data) => {
      if (err) throw err;
      apiData = data;
      console.log(">>j>", typeof data);
      console.log(">>j>", JSON.parse(apiData));
      console.log(">>j>", Response.json(apiData));
    },
  );
})();
