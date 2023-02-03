import { ImageStyled } from "./Image.styles";
import { ImageProps } from "./Image.types";

export function Image({ previewUrl }: ImageProps) {
  return <ImageStyled src={previewUrl} alt="Preview image" />;
}
