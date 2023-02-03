import styled, { keyframes } from "styled-components";

const SkeletonKeyframes = keyframes`
  0%{
      background-position: -500px 0
  }
  100%{
      background-position: 500px 0
  }
`;

const Skeleton = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 0.5rem;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${SkeletonKeyframes};
  animation-timing-function: linear;
  background: darkgray;
  border: 0;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 15%, #eeeeee 35%);
  background-size: 700px 100%;
`;

export { Skeleton };
