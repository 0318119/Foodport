import React from 'react'
import resstyle from '../styles/resbox.module.css';
function Question({obj}) {
    console.log(obj);
  return (
      <div>
    <h6 className="mt-4">Q :
    <span className={resstyle.question}>
       {obj?.data().question}
    </span>
</h6>

<h6 className="mt-4">A :
    <span className={resstyle.answare}>
     ABCD
    </span>
</h6>

</div>
  )
}

export default Question