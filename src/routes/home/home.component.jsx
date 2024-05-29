import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import React from 'react';

const Home = () => {

  return(
    <Fragment>
      <Directory/>
      <Outlet/>
    </Fragment>
  )
}

export default Home;
