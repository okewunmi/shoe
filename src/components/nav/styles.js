import styled from "styled-components";

export const Wrapper = styled.div`
  color: #ffffff;
  display: flex;
  /* height: 10rem; */
  padding: 2rem 12rem;
  align-items: center;
  justify-content: space-between;

  .icon {
    width: 6.5rem;
    height: 6.5rem;
  }

  nav {
    display: flex;
    gap: 1.7rem;
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
  .link {
    transition: 0.3s all;

    &:hover {
      opacity: 0.6;
    }
  }

  .btn {
    padding: 0.3rem 1.8rem;
    border-radius: 2rem;
    font-family: var(--font-nunito-Sans), sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 30px;

    &__sign-up {
      background: #ffffff;
      color: #000000;
      transition: 0.3s all;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
