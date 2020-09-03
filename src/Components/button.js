import React from 'react'
import { Button } from '@material-ui/core';

const CustomButton = ({ children, onClick, color }) => {
  return (
    <Button color={color || "inherit"} type='submit' onClick={onClick}>
      {children}
    </Button>
  )
}

export default CustomButton