import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components";

const SlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const SlideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

export const Content = styled(Tooltip.Content)`
  font-family: var(--nunito-font);
  background-color: white;
  border-radius: 0.3rem;
  padding: 1rem;
  box-shadow: 0px 9px 12px 3px rgba(0, 0, 0, 0.09);
  animation-duration: 0.2s;
  animation-timing-function: linear;

  &.TooltipContent[data-state="delayed-open"] {
    animation-name: ${SlideUp};
  }

  &.TooltipContent[data-state="closed"] {
    animation-name: ${SlideDown};
  }
`;
