import styled, { keyframes } from "styled-components";

const FakeLoading = keyframes`
  from {
    mask-position: 100%;
  }
  to {
    mask-position: 0%;
  }
`;

export const ImageStyled = styled.img`
  max-width: 100%;
  width: 300px;
  height: 200px;
  border-radius: 0.5rem;

  mask-image: linear-gradient(
    60deg,
    black 25%,
    rgba(0, 0, 0, 0.5) 50%,
    black 75%
  );
  mask-size: 300%;
  mask-position: 100%;
  animation: ${FakeLoading} ease 1s;
  object-fit: cover;
`;
