import React from 'react'

export interface Props {
  className?: string
}

function CloseIconBig({ className = '' }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 26 23" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-x ${className}`}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  )
}

export default CloseIconBig
