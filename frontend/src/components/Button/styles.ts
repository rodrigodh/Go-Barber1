import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  color: #232119;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: bold;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
