
import { Avatar, Badge } from 'antd';

const CartWidgetantd = () => {
    return(
      
    <div className="cart-counter">
    <Badge count={4}>
      <Avatar shape="square" size="large"><span role="img" aria-label="cart widged">🛒</span></Avatar>
    </Badge>
</div>
    )

    
}

export default CartWidgetantd