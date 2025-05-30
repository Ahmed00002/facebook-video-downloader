import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Type here..."
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    background: #e8e8e8;
    box-shadow: 20px 20px 60px #e0e0e0, -20px -20px 60px #ffffff;
    transition: 0.3s;
  }

  .input:focus {
    outline-color: #000;
    background: #ffffff;
    box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #ffffff;
    transition: 0.3s;
  }
`;

export default Input;
