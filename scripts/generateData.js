import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";
import generateWorksByYearData from "./generateWorksByYearData.js";

const SPREADSHEET_ID = "1uH2Xx2KBLWT2f7Jlp5b0dzSGV7_AV1d1";

const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=xlsx`;

const generateData = async () => {
  const buffer = await fetchFromGoogleDrive();
  const json = await parseExcelToJson(buffer);
  writeJsonFile(json, "./src/data/data.json");
  console.log("✅ Done! JSON generated successfully.");
  const worksByYear = generateWorksByYearData(json);
  writeJsonFile(worksByYear, "./src/data/worksByYear.json", {
    preserveDescendingYearKeys: true,
  });
};

const fetchFromGoogleDrive = async () => {
  console.log("⬇️ Downloading spreadsheet from Google Drive...");
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return buffer;
};

const parseExcelToJson = async (buffer) => {
  console.log("📊 Parsing Excel...");
  const workbook = XLSX.read(buffer, {
    type: "buffer",
    cellDates: true,
  });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet, {
    defval: null,
    raw: true,
    dateNF: "yyyy-mm-dd",
  });
  return json;
};

const writeJsonFile = (json, filePath, options = {}) => {
  console.log("�� Writing JSON file...");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const content = options.preserveDescendingYearKeys
    ? stringifyObjectWithOrderedKeys(json)
    : JSON.stringify(json, null, 2);
  fs.writeFileSync(filePath, content);
};

const stringifyObjectWithOrderedKeys = (json) => {
  const orderedEntries = Object.entries(json).sort(
    ([yearA], [yearB]) => Number(yearB) - Number(yearA),
  );

  const lines = orderedEntries.map(([year, works]) => {
    const worksJson = JSON.stringify(works, null, 2).replace(/\n/g, "\n  ");
    return `  ${JSON.stringify(year)}: ${worksJson}`;
  });

  return `{\n${lines.join(",\n")}\n}`;
};

generateData().catch(console.error);
