import styled from "styled-components";

export const LandingContainer = styled.div`
  width: 100%;
  height: 75vh;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
`;

export const TableContainer = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid #efefef;
  overflow: auto;
`;

export const TableRow = styled.div`
  position: relative;
  width: 100%;
  height: calc(10% - 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

export const RenderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Loader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    width: 5%;
    height: 45%;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(217, 84, 84, 0.2);
    border-right: 1.1em solid rgba(217, 84, 84, 0.2);
    border-bottom: 1.1em solid rgba(217, 84, 84, 0.2);
    border-left: 1.1em solid #d95454;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
