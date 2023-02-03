"use client";

import { Tooltip } from "./components";
import { useFetchPreview } from "./hooks/useFetchPreview";

type CustomFormEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    preview: HTMLInputElement;
  };
};

export default function Home() {
  const { links, tryLoadPreview } = useFetchPreview();

  return (
    <main className="flex">
      <form
        onSubmit={(e: CustomFormEvent) => {
          e.preventDefault();

          tryLoadPreview(e.target.preview.value);
          e.target.preview.value = "";
        }}
      >
        <input
          type="text"
          placeholder="Please insert page URL"
          name="preview"
        />
      </form>

      <div className="flex col">
        {links.map(({ previewURL, url }, index) => (
          <Tooltip previewURL={previewURL} url={url} key={index} />
        ))}
      </div>
    </main>
  );
}
