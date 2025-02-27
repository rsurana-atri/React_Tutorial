import React from 'react';

const MySampleComponent = () => {
  const unusedVariable = "This should appear grayed out because it is not used."

  console.log(unusedVariable)


  if(1===1)
    {
      console.log("This should reformat into multiple lines")
    }

  return (
    <>
    <h1>Hello World</h1>
    <div>Configure VSCode to reformat this on save.</div>
    </>
  )
}

export default MySampleComponent

