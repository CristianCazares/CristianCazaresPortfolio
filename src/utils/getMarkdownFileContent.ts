import fs from "fs";

export const getMarkdownFileContent = (projectID: string) => {
  const folder = "public/description";
  const file = `${folder}/${projectID}.md`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

export default getMarkdownFileContent;
