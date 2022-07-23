import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTestRun = () => {
  const { id } = useParams();
  console.log('get id', id);
  return <h1>helloo</h1>;
};

export default UpdateTestRun;
