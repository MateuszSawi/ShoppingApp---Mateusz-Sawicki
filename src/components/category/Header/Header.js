import styles from './Header.module.scss';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import Icon from './Icon/Icon';
import Actions from './Actions/Actions';

const Header = () => {
    return (
        <div className={styles.header}>
            <CategoryFilter />
            <Icon />
            <Actions />
        </div>
    );
};

export default Header;