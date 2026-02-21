import { useEffect } from "react";

export default function useSeo({
    title,
    description,
    keywords,
    canonical,
    author,
    robots = "index, follow",
    image,
    url,
}) {
    useEffect(() => {
        const setMetaTag = (name, content, property = false) => {
            if (!content) return;

            const selector = property
                ? `meta[property='${name}']`
                : `meta[name='${name}']`;

            let tag = document.querySelector(selector);

            if (!tag) {
                tag = document.createElement("meta");
                property
                    ? tag.setAttribute("property", name)
                    : tag.setAttribute("name", name);
                document.head.appendChild(tag);
            }

            tag.setAttribute("content", content);
        };

        // Title
        if (title) {
            document.title = title;
            setMetaTag("og:title", title, true);
            setMetaTag("twitter:title", title);
        }

        // Description
        if (description) {
            setMetaTag("description", description);
            setMetaTag("og:description", description, true);
            setMetaTag("twitter:description", description);
        }

        // Keywords
        if (keywords) {
            setMetaTag("keywords", keywords);
        }

        // Author
        if (author) {
            setMetaTag("author", author);
        }

        // Robots
        if (robots) {
            setMetaTag("robots", robots);
        }

        // Image (for sharing preview)
        if (image) {
            setMetaTag("og:image", image, true);
            setMetaTag("twitter:image", image);
            setMetaTag("twitter:card", "summary_large_image");
        }

        // URL
        if (url) {
            setMetaTag("og:url", url, true);
        }

        // Canonical
        if (canonical) {
            let link = document.querySelector("link[rel='canonical']");
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", canonical);
        }
    }, [title, description, keywords, canonical, author, robots, image, url]);
}