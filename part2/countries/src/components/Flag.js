import React from 'react';

const Flag = ({ flag, name }) => <img src={flag} alt={('flag of ', name)} style={{ width: '100px' }} />;

export default Flag;
