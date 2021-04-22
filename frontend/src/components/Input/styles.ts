import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #232119;
  border: 2px solid #232119;
  color: #666360;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
