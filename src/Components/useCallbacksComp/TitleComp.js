import React from 'react'

function TitleComp() {
  console.log('Rendering Title')
  return (
    <h2>
      useCallback Hook
    </h2>
  )
}

export default React.memo(TitleComp)
