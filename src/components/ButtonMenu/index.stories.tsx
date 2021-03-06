import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import ButtonMenu from "./ButtonMenu";
import ButtonMenuItem from "./ButtonMenuItem";
import {useMatchBreakpoints} from "../../hooks";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Button Menu",
  component: ButtonMenu,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

    const { isXs, isSm, isMd, isLg } = useMatchBreakpoints()
    const isMobile = isXs || isSm
    const isTablet = isMd || isLg

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} line='light' variant="underline" scale={isMobile || isTablet ? 'md' : 'xl'}>
          <ButtonMenuItem>Buses</ButtonMenuItem>
          <ButtonMenuItem>Buses</ButtonMenuItem>
          <ButtonMenuItem>Buses</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="underline" line='primary' scale="md">
          <ButtonMenuItem>Transparent 1</ButtonMenuItem>
          <ButtonMenuItem>Transparent 2</ButtonMenuItem>
          <ButtonMenuItem>Transparent 3</ButtonMenuItem>
          <ButtonMenuItem>Transparent 4</ButtonMenuItem>
          <ButtonMenuItem>Transparent 5</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="underline" scale="sm">
          <ButtonMenuItem>Transparent 1</ButtonMenuItem>
          <ButtonMenuItem>Transparent 2</ButtonMenuItem>
          <ButtonMenuItem>Transparent 3</ButtonMenuItem>
          <ButtonMenuItem>Transparent 4</ButtonMenuItem>
          <ButtonMenuItem>Transparent 5</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="underline" scale="xs">
          <ButtonMenuItem>Transparent 1</ButtonMenuItem>
          <ButtonMenuItem>Transparent 2</ButtonMenuItem>
          <ButtonMenuItem>Transparent 3</ButtonMenuItem>
          <ButtonMenuItem>Transparent 4</ButtonMenuItem>
          <ButtonMenuItem>Transparent 5</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} onItemClick={handleClick1} scale="sm">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
      <Row>
        <ButtonMenu activeIndex={index1} autoWidth onItemClick={handleClick1} scale="sm">
          <ButtonMenuItem>Button 1</ButtonMenuItem>
          <ButtonMenuItem>Button 2</ButtonMenuItem>
          <ButtonMenuItem>Button 3</ButtonMenuItem>
          <ButtonMenuItem>Button 4</ButtonMenuItem>
        </ButtonMenu>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  return (
    <Row>
      <ButtonMenu activeIndex={0}>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 1
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 2
        </ButtonMenuItem>
        <ButtonMenuItem as="a" href="https://pancakeswap.finance">
          Link 3
        </ButtonMenuItem>
      </ButtonMenu>
    </Row>
  );
};
