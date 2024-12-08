import { cache } from "react";

export const getSearchedIcon = cache(async (title) => {
  const words = title.split(" ");

  for (const word of words) {
    const url = `https://api.iconify.design/search?query=${word}&pretty=1`;
    const data = await (await fetch(url)).json();

    if (data.icons && data.icons.length > 0) {
      return data.icons[0];
    }
  }

  return "mynaui:aeroplane";
});
