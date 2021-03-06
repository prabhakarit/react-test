import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 2,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 30,
  padding: '0 30px',
});

const TodoDeleteAll = (props) => {
  return ( 
    <span>
        &nbsp;
        &nbsp;
        <MyButton hidden={true} onClick={()=>{props.handleDeleteAll();}} >
           Delete All
        </MyButton>
    </span> 
  );
};

export default TodoDeleteAll;