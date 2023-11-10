import { Form,Field, ErrorMessage } from 'formik';

import styled from 'styled-components';

export const StyledFormik = styled(Form)`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${p => p.theme.colors.grey};
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
`;
export const Error = styled(ErrorMessage)`
color: ${p => p.theme.colors.red};
margin-top:5px;
display:block;
`
export const FormField = styled(Field)`
display:block;
padding:5px 10px;
margin-top:10px;
outline:none;
`
export const AddButton = styled.button`
text-transform:uppercase;
font-size:12px;
font-weight:700;
cursor: pointer;
width: 130px;
padding:10px;
background-color:green;
border: 1px solid transparent;
border-radius:4px;
transition:color .5s linear, background-color .3s linear,border-color .4s ease;
&:hover{
    background-color: transparent;
    color: green;
    border-color: green;
}
`