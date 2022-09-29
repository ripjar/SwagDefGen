import yaml from "js-yaml";
import anyConversion from "./anyConversion";
import { ConvertOptions } from "./interface/ConvertOptions";

const obj = {
};

const options: ConvertOptions = {};
console.log(yaml.dump(anyConversion(obj, options)));
