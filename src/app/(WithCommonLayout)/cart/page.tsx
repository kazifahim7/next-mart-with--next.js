import CartProducts from "@/components/modules/cart/CartProducts";
import Coupon from "@/components/modules/cart/Coupon";
import PaymentDetails from "@/components/modules/cart/PaymentDetails";
import Banner from "@/components/modules/products/Banner";
import Address from "@/context/Address";


const CartPage = () => {
    return (
        <div className="container mx-auto">
           <Banner title="Cart Page" path="Home - Cart"></Banner>
           <div className="grid grid-cols-12 gap-8">
            <CartProducts></CartProducts>
            <Coupon></Coupon>
            <Address></Address>
            <PaymentDetails></PaymentDetails>

           </div>
        </div>
    );
};

export default CartPage;