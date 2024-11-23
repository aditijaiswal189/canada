import cheerio from "cheerio";

export const cleanHTMLContent = (htmlContent) => {
  const $ = cheerio.load(htmlContent);

  // Remove Elementor-specific wrappers and attributes
  $("[data-elementor-type]").removeAttr("data-elementor-type");
  $("[data-elementor-id]").removeAttr("data-elementor-id");
  $("[data-widget_type]").removeAttr("data-widget_type");
  $("[data-element_type]").removeAttr("data-element_type");
  $("[data-core-v316-plus]").removeAttr("data-core-v316-plus");

  // Remove Elementor-specific classes
  $("[class*='elementor']").removeClass((index, className) => {
    return className
      .split(" ")
      .filter((name) => name.startsWith("elementor"))
      .join(" ");
  });

  // Optional: Remove inline styles
  $("style").remove();
  $("[style]").removeAttr("style");

  // Return the cleaned HTML
  return $.html();
};
