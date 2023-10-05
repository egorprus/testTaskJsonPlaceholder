import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledApp = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled.main`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSection = styled.section`
  background: transparent;
  border-radius: 3px;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export const StyledList = styled.ul`
  padding-left: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  list-style-type: none;
  padding: 10px 0;
	display: flex;
  & + & {
    border-top: 1px solid;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  display: inline-block;
	padding: 0.6em 1.2em;
	border: 1px solid transparent;
	background-color: #1a1a1a;
	border-radius: 8px;
	flex: 1;
`;

export const StyledMainTitle = styled.h1`
  margin: 0 20px;
  min-width: 60px;
  text-align: center;
`;

export const StyledPostTitle = styled.h2`
  font-size: 16px;
  margin: 0;
`;

export const StyledParagraph = styled.p`
  font-size: 12px;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  align-items: center;
  flex: 1;
`;

export const StyledPaginationText = styled.span`
  min-width: 50px;
  text-align: center;
`;

export const StyledInput = styled.input`
  padding: 0.6em 1.2em;
  font-size: 1em;
`;
