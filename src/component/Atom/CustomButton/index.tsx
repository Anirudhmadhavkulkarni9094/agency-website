import React from 'react'
import Button, { type ButtonProps } from "@mui/material/Button";

function CustomButton({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} >{children}</Button>
  )
}

export default CustomButton