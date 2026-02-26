import * as XLSX from "xlsx";
import fs from "fs";
import generateWorksByYearData from "./generateWorksByYearData.js";

const SPREADSHEET_ID = "1uH2Xx2KBLWT2f7Jlp5b0dzSGV7_AV1d1";

const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=xlsx`;

const generateData = async () => {
  const buffer = await fetchFromGoogleDrive();
  const json = await parseExcelToJson(buffer);
  writeJsonFile(json, "./src/data/data.json");
  console.log("✅ Done! JSON generated successfully.");
  const worksByYear = generateWorksByYearData();
  writeJsonFile(worksByYear, "./src/data/worksByYear.json");
};

const fetchFromGoogleDrive = async () => {
  console.log("⬇️ Downloading spreadsheet from Google Drive...");
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return buffer;
};

const parseExcelToJson = async (buffer) => {
  console.log("📊 Parsing Excel...");
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(sheet, { defval: null });
  return json;
};

const writeJsonFile = (json, filePath) => {
  console.log("�� Writing JSON file...");
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
};

generateData().catch(console.error);
