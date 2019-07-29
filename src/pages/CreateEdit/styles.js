import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  > div {
    max-width: 940px;
    width: 100%;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    margin-bottom: 20px;

    div {
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        font-size: 20px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      height: 50px;
      padding: 15px 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      transition: 0.2s border;

      &:focus {
        border: 1px solid #fff;
      }
    }

    textarea {
      height: 200px;
      padding: 20px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 0;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.5);
      transition: 0.2s border;

      resize: none;

      &:focus {
        border: 1px solid #fff;
      }
    }

    div {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;

      button {
        padding: 8px 18px;
        border-radius: 4px;
        background: #f94d6a;
        border: 0;
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        transition: 0.2s background;

        display: flex;
        align-items: center;

        &:hover {
          background: ${darken(0.03, '#f94d6a')};
        }

        svg {
          margin-right: 10px;
        }
      }
    }
  }
`;
