import * as TooltipRadix from "@radix-ui/react-tooltip";
import { Content } from "./Tooltip.styles";
import { Nunito } from "@next/font/google";
import { Image } from "../Image";
import { TooltipProps } from "./Tooltip.types";
import { Skeleton } from "../Skeleton";

const nunito = Nunito({
  variable: "--nunito-font",
});

export function Tooltip({ previewURL, url }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={100}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <Content
            className={`TooltipRadixContent ${nunito.variable}`}
            sideOffset={5}
          >
            {!previewURL ? <Skeleton /> : <Image previewUrl={previewURL} />}
          </Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
