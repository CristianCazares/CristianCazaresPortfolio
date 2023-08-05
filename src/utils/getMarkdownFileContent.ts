import fs from "fs";
import { join } from "path";

const dir = join(process.cwd(), "public");

export const getMarkdownFileContent = (projectID: string) => {
  const folder = `${dir}/description`;
  const file = `${folder}/${projectID}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

export default getMarkdownFileContent;
