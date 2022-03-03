import styled from 'styled-components';

export const ClientModalInput = styled.input`
  height: 30%;
  width: ${props => props.width ? props.width : "50%"}
`;
