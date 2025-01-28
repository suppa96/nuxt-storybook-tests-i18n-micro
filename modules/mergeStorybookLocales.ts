import { defineNuxtModule } from "@nuxt/kit";
import { join, resolve } from "path";
import fs from "fs";
import consola from "consola";

export default defineNuxtModule({
  setup: async () => {
    // Retrieve path to the public folder
    const localesPath = resolve("./locales");

    // retrieve the content of all en.json files in the locales directory
    const enJsonContents = traverseDirectory(localesPath, {});

    // Retrieve path to the storybookLocales folder
    const storybookLocalesPath = resolve(
      "./storybook_locales/_locales/general/en"
    );

    // Write the content of en.json files in the storybookLocales directory
    fs.mkdirSync(storybookLocalesPath, { recursive: true });
    fs.writeFileSync(
      join(storybookLocalesPath + "/data.json"),
      JSON.stringify(enJsonContents, null, 2)
    );
  },
});

/**
 * Recursively traverse a directory and return the content of all en.json files inside (if present)
 * @param directory The directory to recursvely scan
 * @@param initalJsonContents The initial object to store the content of the en.json files
 * @returns
 */
function traverseDirectory(
  directory: string,
  initalJsonContents: Record<string, any> = {}
) {
  const files = fs.readdirSync(directory);
  let jsonContents = { ...initalJsonContents };

  for (const file of files) {
    const fullPath = join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively traverse subdirectories
      jsonContents = traverseDirectory(fullPath, jsonContents);
    } else if (stat.isFile() && file === "en.json") {
      // Read the content of en.json
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      const parsedContent = JSON.parse(fileContent);

      consola.info("getStorybookLocales: parsed locale content from", fullPath);
      // Store the content in an object, using the directory path as the key
      jsonContents = { ...jsonContents, ...parsedContent };
    }
  }

  return jsonContents;
}
