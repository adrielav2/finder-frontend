import styled from 'styled-components';

export const SliderBody = styled.body`
    display: flex;
    background-color: #f6f5f7;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;
  `;


  export const SliderH1 = styled.h1`
  h1 {
  font-weight: 700;
  letter-spacing: -1.5px;
  margin: 0;
  margin-bottom: 15px;
    }
  &.title {
  font-size: 45px;
  line-height: 45px;
  margin: 0;
  text-shadow: 0 0 10px rgba(16, 64, 74, 0.5);
}
`;

export const SliderP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  text-shadow: 0 0 10px rgba(16, 64, 74, 0.5);
`;

export const SliderSpan = styled.span`
  font-size: 14px;
  margin-top: 25px;
`;

export const SliderA = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #4bb6b7;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-around;

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    accent-color: #333;
    width: 12px;
    height: 12px;
  }

  label {
    font-size: 14px;
    user-select: none;
    padding-left: 5px;
  }
`;

export const SliderButton = styled.button`
  position: relative;
  border-radius: 20px;
  border: 1px solid #4bb6b7;
  background-color: #4bb6b7;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  margin: 10px;
  padding: 12px 80px;
  letter-spacing: 1px;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    letter-spacing: 3px;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &.ghost {
    background-color: rgba(225, 225, 225, 0.2);
    border: 2px solid #fff;
    color: #fff;

    i {
      position: absolute;
      opacity: 0;
      transition: 0.3s ease-in-out;
    }

    i.register {
      right: 70px;
    }

    i.login {
      left: 70px;
    }

    &:hover i.register {
      right: 40px;
      opacity: 1;
    }

    &:hover i.login {
      left: 40px;
      opacity: 1;
    }
  }
`;

export const SliderForm = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const SliderInput = styled.input`
  background-color: #eee;
  border-radius: 10px;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;


export const SliderContainer = styled.div`
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 500px;

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }

  .login-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.right-panel-active .login-container {
    transform: translateX(100%);
  }

  .register-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  &.right-panel-active .register-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  &.right-panel-active .overlay-container {
    transform: translate(-100%);
  }

  .overlay {
    background-image: url('image/image.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(46, 94, 109, 0.4) 40%,
      rgba(46, 94, 109, 0)
    );
  }

  &.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  &.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  &.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

  &.social-container {
  margin: 20px 0;
}
`;