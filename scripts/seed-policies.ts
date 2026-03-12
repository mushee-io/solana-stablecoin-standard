import fs from "node:fs";
import path from "node:path";
const file = path.resolve(process.cwd(), "configs/policies/regulated-policy.json");
console.log(fs.readFileSync(file, "utf8"));
