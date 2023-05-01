import styled from 'styled-components';

interface ILabelProps {
  htmlFor?: string;
}

export const StyledLabel = styled.div<ILabelProps>`
  font-weight: bold;
  display: flex;
`

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #ffffff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const StyledError = styled.span`
  color: red;
  font-size: 12px;
  text-align: left;
  margin-bottom: 5px;
`

export const ItemWrapper = styled.div`
  margin-bottom: 20px;
`