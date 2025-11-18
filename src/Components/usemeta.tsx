import { useEffect } from "react";

export function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useMeta(nameOrProperty: string, content: string, isProperty = false) {
  useEffect(() => {
    const selector = isProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;

    let tag = document.querySelector(selector) as HTMLMetaElement | null;

    if (!tag) {
      tag = document.createElement("meta");
      if (isProperty) {
        tag.setAttribute("property", nameOrProperty);
      } else {
        tag.setAttribute("name", nameOrProperty);
      }
      document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);

    return () => {
      // Optional cleanup if component unmounts
      // tag.remove();
    };
  }, [nameOrProperty, content, isProperty]);
}

export function useCanonical(url: string) {
  useEffect(() => {
    let link = document.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    link.setAttribute("href", url);
  }, [url]);
}
