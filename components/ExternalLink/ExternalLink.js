import React from 'react'

const ExternalLink = ({ text = 'link', href = '/' }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <strong>{text}</strong>
    </a>
  )
}

export default ExternalLink
