import React from 'react'
import { Button } from '@material-ui/core';

const CustomButton = ({ children, onClick }) => {
  return (
    <Button color="primary" type='submit' onClick={onClick}>
      {children}
    </Button>
  )
}

export default CustomButton