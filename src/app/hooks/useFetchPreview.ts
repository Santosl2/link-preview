"use client";

import { useState, useCallback, useEffect } from "react";

type LinksStateProps = {
  url: string;
  previewURL: string;
};

const abortController = new AbortController();

export const useFetchPreview = () => {
  const [links, setLinks] = useState<LinksStateProps[]>([]);

  const tryLoadPreview = useCallback(async (url: string) => {
    setLinks((prevLinks) => {
      return [
        ...prevLinks,
        {
          url,
          previewURL: "",
        },
      ];
    });

    const res = await fetch("/api/getPreview", {
      method: "POST",
      body: JSON.stringify({
        url,
      }),
      signal: abortController.signal,
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const blob = await res.blob();
    const imagePreviewObjectURL = URL.createObjectURL(blob);

    setLinks((prevLinks) => {
      const prevLinksCopy = [...prevLinks].map((e) =>
        e.url === url ? { url, previewURL: imagePreviewObjectURL } : e
      );

      return [...prevLinksCopy];
    });
  }, []);

  return { tryLoadPreview, links };
};
