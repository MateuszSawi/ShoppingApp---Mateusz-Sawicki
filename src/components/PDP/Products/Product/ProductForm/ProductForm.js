import styles from "./ProductForm.module.scss";
import CartButton from "./CartButton/CartButton";
import OptionColor from "./OptionColor/OptionColor";
import OptionSize from "./OptionSize/OptionSize";
import FormTitle from './FormTitle/FormTitle';
import Price from "./Price/Price";
import Description from "./Description/Description";

const ProductForm = props => {
  return(
    <div className={styles.formContainer}>
      <FormTitle data={props.data}/>
        <OptionSize 
          data={props.data} 
          currentSize={props.currentSize} 
          setCurrentSize={props.setCurrentSize} />

        <OptionColor 
          data={props.data} 
          currentColor={props.currentColor} 
          setCurrentColor={props.setCurrentColor} />

        <Price 
          data={props.data} 
          currentCurrency={props.currentCurrency} />
          
        <CartButton 
          data={props.data} 
          currentColor={props.currentColor} 
          setCurrentColor={props.setCurrentColor} 
          currentCurrency={props.currentCurrency} 
          cartItems={props.cartItems} 
          setCartItems={props.setCartItems}
          currentSize={props.currentSize} 
          setCurrentSize={props.setCurrentSize} />

        <Description data={props.data} />
    </div>
  )
}

export default ProductForm;