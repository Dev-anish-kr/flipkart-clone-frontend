import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUserInfo, loadInformation, setInformation } from '../../features/userInfoFetch/userInfoSlice';


const CartCard = ({uid,count}) => {
    const Navigete = useNavigate();
    const  userInfo= useSelector(getUserInfo);
    const dispatch=useDispatch()
    if(!userInfo?.username){
        return <p>Unauthorized...</p>
    }
    const cartItems=userInfo?.cartItems

    const cartItem= cartItems.find(citem=>citem.uid===uid)

    const onRemove=(uid)=>{
       const newCartValue= cartItems.filter(citem=>citem.uid!==uid);
       dispatch(setInformation({username:userInfo?.username,cartItems:newCartValue}))
       dispatch(loadInformation());
    }

    return (

        <div className='cart-card'>
            <div className="cc-inner">
                <div className="cc-left">
                    <div onClick={() => {
                        Navigete(`/product${cartItem.category}${cartItem.uid}`)
                    }} className="ccl-top">
                        <img style={cartItem.images.main.size_c} src={cartItem.images.main.link} alt="" />
                    </div>
                    <div className="ccl-bottom">
                        <button>-</button>
                        <input defaultValue={count} type="number" />
                        <button>+</button>
                    </div>
                </div>
                <div className="cc-right">
                    <p onClick={() => {
                        Navigete(`/product${cartItem.category}${cartItem.uid}`)
                    }} className="name">{cartItem.name}</p>
                    <p className="detail">{cartItem.details[0]}</p>
                    <p className="seller">Seller: {cartItem.sellerDetail.s_name}</p>
                    <p className="price"><span className="mrp">{cartItem.MRP + " "}</span><span className='price-value'>{cartItem.price + " "}</span> <span className='offer'>{cartItem.sale_offer}</span></p>
                    <p className="delevery">{cartItem.delevery_type}</p>
                    <p onClick={()=>{onRemove(cartItem.uid)}} className="remove">REMOVE</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartCard