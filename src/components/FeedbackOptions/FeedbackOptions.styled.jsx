import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;
export const ListItem = styled.li`
  margin-right: 10px;
`;
export const ListBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
