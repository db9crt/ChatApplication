import { getByLabelText, render, screen, wait } from '@testing-library/react';
import React from "react";
import { Form , Button} from 'react-bootstrap';
import {toBeInTheDocument} from '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import { gql } from '@apollo/client';
import { mount , configure } from 'enzyme';
import {act} from 'react-dom/test-utils';

import { MockedProvider } from "@apollo/client/testing";
import Register,{errors,username, submitLoginForm, REGISTER_USER, register} from '../pages/register';
import { createBrowserHistory } from 'history';

import { isObjectType } from 'graphql';
import { Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mocks = [
   {
     request: {
        query: REGISTER_USER,
     },
     result: {
       data: {
        register: { username: "Dona", email: "annie.dona@gmail.com", createdAt:"" }
       }
     }
   }
  ];
 
 it("rendering Email address", async () => {
   let wrapper ;
   const history = createBrowserHistory();
   await act (async()=>{
    wrapper= mount(
     <MockedProvider mocks={mocks} addTypename={false}>
      <Router history={history}>
       <Register />
       </Router>
     </MockedProvider>
 )
    
    wrapper.update();
 expect(wrapper).toBeTruthy();
 const options = {
  normalizeWhitespace: false,
};
 expect(wrapper.find(Form.Label).at(0).text()).toContain('Email address');
    });
  
  });
   
  
 it("renders Username", async () => {
  let wrapper ;
  const history = createBrowserHistory();
  await act (async()=>{
   wrapper= mount(
    <MockedProvider mocks={mocks} addTypename={false}>
     <Router history={history}>
      <Register />
      </Router>
    </MockedProvider>
)
   
   wrapper.update();
expect(wrapper).toBeTruthy();
const options = {
 normalizeWhitespace: false,
};

expect(wrapper.find(Form.Label).at(1).text()).toContain('Username');


   });
   
 });
   it("renders password", async () => {
    let wrapper ;
    const history = createBrowserHistory();
    await act (async()=>{
     wrapper= mount(
      <MockedProvider mocks={mocks} addTypename={false}>
       <Router history={history}>
        <Register />
        </Router>
      </MockedProvider>
  )
     
     wrapper.update();
  expect(wrapper).toBeTruthy();
  const options = {
   normalizeWhitespace: false,
  };
  
  expect(wrapper.find(Form.Label).at(2).text()).toContain('Password');
  
 });

 });

 
 it("renders Confirm password", async () => {
    let wrapper ;
    const history = createBrowserHistory();
    await act (async()=>{
     wrapper= mount(
      <MockedProvider mocks={mocks} addTypename={false}>
       <Router history={history}>
        <Register />
        </Router>
      </MockedProvider>
  )
     
     wrapper.update();
  expect(wrapper).toBeTruthy();
  const options = {
   normalizeWhitespace: false,
  };
  
  expect(wrapper.find(Form.Label).at(3).text()).toContain('Confirm password');
  
  
     });
  
    });

 

 it("rendering submit button", async () => {
  let wrapper ;
  const history = createBrowserHistory();
  await act (async()=>{
   wrapper= mount(
    <MockedProvider mocks={mocks} addTypename={false}>
     <Router history={history}>
      <Register />
      </Router>
    </MockedProvider>
)
   
   wrapper.update();
expect(wrapper).toBeTruthy();
const options = {
 normalizeWhitespace: false,
};

expect(wrapper.find(Button).at(0).text()).toBe('Register');
   });

});
  
 it("renders classname", async () => {
  let wrapper ;
  const history = createBrowserHistory();
  await act (async()=>{
   wrapper= mount(
    <MockedProvider mocks={mocks} addTypename={false}>
     <Router history={history}>
      <Register />
      </Router>
    </MockedProvider>
)
   
   wrapper.update();
expect(wrapper).toBeTruthy();
const options = {
 normalizeWhitespace: false,
};
const regexp = new RegExp('^is-invalid$');

expect(wrapper.find(Form.Control).at(1).hasClass(regexp));
   });
   

 });

  
