import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input, button, textarea {
  font: 400 18px Roboto, sans-serif;
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}

form textarea {
  width: 100%;
  min-height: 140px;
  color: #333;
  resize: vertical;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 16px 24px;
  line-height: 24px;
}

.button {
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
}

.button:hover {
  filter: brightness(90%);
}

.back-link{
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.2;
}

.back-link svg {
  margin-right: 8px;
}

.back-link:hover {
  opacity: 0.8;
}

.container {
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.internal-container {
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;
