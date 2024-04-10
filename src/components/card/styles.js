import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #757575;
  /* width: 80%; */
  height: 37rem;
  background: #d9d9d91a;
  color: #ffffff;
  padding: 4rem 0rem 4rem 4rem;
  border-radius: 2rem;
  display: flex;
  margin: 2rem 7rem 4rem 7rem;
  position: relative;

  .text {
    position: relative;
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1.2rem;
    justify-content: space-between;

    .txt {
      display: flex;
      flex-direction: column;

      &-big {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 4.2rem;
        font-weight: 800;
        /* letter-spacing: 1px; */
        /* word-spacing: 1px; */
      }
      &-small {
        font-family: var(--font-nunito-Sans), sans-serif;
        font-size: 1.1rem;
        font-weight: 400;
        /* letter-spacing: 1px; */
        word-spacing: 1px;
        width: 50%;
      }
    }

    .btn {
      padding: 0.2rem 2.2rem;
      border-radius: 2rem;
      font-family: var(--font-nunito-Sans), sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;

      &__sign-up {
        background: #ffffff;
        color: #000000;
        transition: 0.3s all;
        outline: 2px solid white;

        &:hover {
          opacity: 0.6;
          outline-offset: 3px;
        }
      }
      &__black {
        color: #ffffff;
        /* border: 1px solid #908d8d; */
        outline: 2px solid #908d8d;

        &:hover {
          opacity: 0.6;
          background: #ffffff;
          color: #000000;
          outline-offset: 3px;
        }
      }
    }
  }
  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.1rem;
  }

  .image {
    position: absolute;
    display: flex;
    flex-direction: column;

    transform: translateX(30rem) translateY(1rem);
    width: 52%;
    .big-shoe {
      width: 100%;
    }
    .box {
      margin-top: -5rem;
      margin-left: 7rem;
      width: 29rem;
      height: 3rem;
    }
    .shade {
      margin-top: -3rem;
      margin-left: 7.6rem;
      width: 24rem;
      height: 0.7rem;

      /* border-radius: 100%; */
      background: linear-gradient(
        90deg,
        rgba(136, 138, 143, 0.94) 0%,
        rgba(240, 244, 255, 0.24) 100%
      );
    }
  }
  .mp {
    margin-top: -1rem;
  }
`;
