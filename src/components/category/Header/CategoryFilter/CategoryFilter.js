import styles from './CategoryFilter.module.scss';

const CategoryFilter = props => {

  return(
    <div className={styles.categories}>
      <ul> 
        <li>
          <div className={styles.singleCategory}>
            <button className={styles.singleCategoryButton} type="button" onClick={e => props.setCurrentFilter('ALL')}>ALL</button>
          </div>
        </li>

        <li>
          <div className={styles.singleCategory}>
            <button className={styles.singleCategoryButton} type="button" onClick={e => props.setCurrentFilter('WOMEN')}>WOMEN</button>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <button className={styles.singleCategoryButton} type="button" onClick={e => props.setCurrentFilter('MEN')}>MEN</button>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <button className={styles.singleCategoryButton} type="button" onClick={e => props.setCurrentFilter('KIDS')}>KIDS</button>
          </div>
        </li>
      </ul>     
    </div>   
  );
};

export default CategoryFilter;