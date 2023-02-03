import React from 'react';
import { PeopleList } from '../PeopleList';

const people = [{
    name: 'Jonah',
    age: 7,
    hairColor: 'blonde'
  }, {
    name: 'Cathy',
    age: 25,
    hairColor: 'brown'
  }, {
    name: 'Austin',
    age: 33,
    hairColor: 'red'
  }];

  export const PeopleListPage = () => {
    console.log("People List Page");
    return (
        <>
        <h1>The People List Page</h1>
        <PeopleList people={people} />
        </>
    );
  }