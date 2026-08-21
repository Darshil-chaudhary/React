import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

const title = "Darshil Chaudhry | React & Web Developer Portfolio";
const description =
  "Portfolio of Darshil Chaudhry, a React and web developer building responsive interfaces with React, JavaScript, Bootstrap, HTML and CSS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
