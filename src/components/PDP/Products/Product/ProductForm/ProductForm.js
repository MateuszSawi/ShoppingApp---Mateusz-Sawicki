import styles from "../Product.module.scss";
import Button from "./Button/Button";
import OptionColor from "./OptionColor/OptionColor";
import OptionSize from "./OptionSize/OptionSize";
import PropTypes from 'prop-types';

const ProductForm = props => {
  return(
    <form onSubmit={props.hundleSubmit}>
      <OptionSize data={props.data} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />

      <OptionColor data={props.data} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}
        prepareColorClassName={props.prepareColorClassName}/>
        
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
    </form>

  )
}

ProductForm.propTypes = {
  hundleSubmit: PropTypes.func,
  data: PropTypes.object,
  currentSize: PropTypes.string,
  currentColor: PropTypes.string,
  setCurrentSize: PropTypes.func,
  setCurrentColor: PropTypes.func,
  prepareColorClassName: PropTypes.func
}

export default ProductForm;