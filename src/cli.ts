import yaml from "js-yaml";
import anyConversion from "./anyConversion";
import { ConvertOptions } from "./interface/ConvertOptions";
import fs from "fs";

const filename = "a";
const data = fs.readFileSync(`./src/${filename}.json`, "utf8");
const options: ConvertOptions = {};
const result = yaml.dump(anyConversion(JSON.parse(data), options));
fs.writeFileSync(`./src/${filename}.yaml`, result);
