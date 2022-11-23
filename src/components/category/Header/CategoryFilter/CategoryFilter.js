import styles from './CategoryFilter.module.scss';
import { useState} from 'react';

const CategoryFilter = props => {

  // const [currentFilter, setCurrentFilter] = useState('');
  // console.log(props);
  // console.log('ff', props.currentFilter);

  return(
    <div className={styles.categories}>
      <ul> 
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