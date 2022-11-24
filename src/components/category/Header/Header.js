import styles from './Header.module.scss';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import Icon from './Icon/Icon';
import Actions from './Actions/Actions';

const Header = props => {

    return (
        <div className={styles.header}>
            <CategoryFilter currentFilter={props.currentFilter} setCurrentFilter={props.setCurrentFilter} />
            <Icon />
            <Actions cartItems={props.cartItems} setCartItems={props.setCartItems} currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} />
        </div>
    );
};

export default Header;