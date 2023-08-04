import { remark } from "remark";
import html from "remark-html";

const processMarkdown = async (content: string) => {
  return await remark().use(html).process(content);
};

export default processMarkdown;
