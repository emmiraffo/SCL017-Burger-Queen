import React , { Component, Fragment} from 'react'

function BtnSelect () {
    return <Fragment>
           <input type="checkbox" className="btn-check" id="btn-check" autocomplete="off"/>
              <label className="btn btn-primary" for="btn-check">Single toggle</label>
    </Fragment>
}
export default BtnSelect