import React , { Fragment} from 'react'

function OrderSend (){
        
        return <Fragment>
            <div class="alert alert-success" role="alert">
              <span>Pedido Enviado</span>
            </div>
            <div >
                <a href="/menu">Tomar Otro Pedido</a>                
            </div>
            
        </Fragment>
     }       

    export default OrderSend