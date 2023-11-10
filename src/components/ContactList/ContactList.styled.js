import styled from 'styled-components';

export const List = styled.ul`
width:370px;
list-style:none;
margin:0 auto;
`
export const ListItem = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid grey;
border-radius:4px; 
padding: 10px;
margin-bottom: 8px;
`;
export const DeleteButton = styled.button`
background-color: grey;
color: white;
border: none;
border-radius: 4px;
padding: 4px 8px;
cursor: pointer;
transition: background-color .3s;

&:hover {
  background-color: red;
}
`;