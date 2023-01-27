import React from 'react';
import { PeopleListItem } from './PeopleListItem';
import styled from 'styled-components';

//Styled components CSS in javascript, installed with npm
//Allows you to write css in the javascript component files, instead of a sperate stylesheet.
//can also use inline styles like in html, need to use camel case instead of dashes

const Wrapper = styled.div`
    border: 2px solid white;
    padding:32px;
`;

export const PeopleList = ({ people }) => (
    <Wrapper>
        {people.map(person => <PeopleListItem person={person} key={person.name} />)}
    </Wrapper>
);

