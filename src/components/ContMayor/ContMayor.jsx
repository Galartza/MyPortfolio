import React from 'react';
import Container from '../Container/Container';
import Card from '../Card/Card'
import '../ContMayor/contMayor.css'

const ContMayor = () => {
  return (
    <div className='cont-mayor'>
      <Card />
      <Container />
    </div>
  );
};

export default ContMayor;