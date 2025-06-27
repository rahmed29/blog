/** @jsx h */

import blog from "./src/blog.tsx";
import "jsr:@std/dotenv/load";

blog({
  title: "ryaan",
  description: "\n",
  avatar: "./public/ava.jpg",
  avatarClass: "rounded",
  author: "ryaan",
  // These are env variables cause...
  // Won't leak discord UUID
  discord: Deno?.env.get("DISCORD") || "",
});

// blog({
//   author: "Dino",
//   title: "My Blog",
//   description: "The blog description.",
//   avatar: "avatar.png",
//   avatarClass: "rounded-full",
//   links: [
//     { title: "Email", url: "mailto:bot@deno.com" },
//     { title: "GitHub", url: "https://github.com/denobot" },
//     { title: "Twitter", url: "https://twitter.com/denobot" },
//   ],
//   lang: "en",
//   // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
//   dateFormat: (date) =>
//     new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
//   middlewares: [
//     ga("UA-XXXXXXXX-X"),
//     redirects({
//       "/foo": "/my_post",
//       // you can skip leading slashes too
//       "bar": "my_post2",
//     }),
//   ],
//   unocss: unocss_opts, // check https://github.com/unocss/unocss
//   favicon: "favicon.ico",
// });
