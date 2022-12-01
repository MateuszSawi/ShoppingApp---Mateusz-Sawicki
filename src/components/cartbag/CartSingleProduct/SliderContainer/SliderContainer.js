import styles from './SliderContainer.module.scss';
import Slider from './Slider/Slider';
import RightArrow from './RightArrow/RightArrow';
import LeftArrow from './LeftArrow/LeftArrow';

const SliderContainer = props => {
  let currentImg = props.colors.indexOf(props.cartItem.currentColor);

  const nextSlide = () => {
    if (currentImg === props.length - 1) {
      currentImg = 0;
    } else {
      currentImg = currentImg +1
    }
    props.cartItem.currentColor = props.cartItem.colors[currentImg];
    props.setCartItems(current => [...current,]);
  };

  const prevSlide = () => {
    if (currentImg === 0) {
      currentImg = props.length - 1;
    } else {
      currentImg = currentImg - 1;
    }
    props.cartItem.currentColor = props.cartItem.colors[currentImg];
    props.setCartItems(current => [...current,]);
  };

  return (
    <div className={styles.productSlider}>
      {props.colors.map(color =>
        <Slider
          id={props.id}
          key={color}
          color={color}
          length={props.length}
          index={props.colors.indexOf(color)}
          currentColor={props.cartItem.currentColor}
          cartItem={props.cartItem}
          currentImg={currentImg} />
      )}
      <RightArrow length={props.length} nextSlide={nextSlide} />
      <LeftArrow length={props.length} prevSlide={prevSlide} />
    </div>
  );
};

export default SliderContainer;