import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  a + img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    color: #e02041;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    border: none;
    background: transparent;
    margin-left: 16px;
    transition: 0.2s;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);
  }

  button:hover {
    background: #e02041;
    color: #dcdce6;
  }
`;
