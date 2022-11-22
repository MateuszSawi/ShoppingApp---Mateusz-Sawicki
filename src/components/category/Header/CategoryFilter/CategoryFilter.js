import styles from './CategoryFilter.module.scss';
import { useState} from 'react';

const CategoryFilter = () => {

  const [currentFilter, setCurrentFilter] = useState('');
  console.log(currentFilter);

  return(
    <div className={styles.categories}>
      <ul> 
        <li>
          <div className={styles.singleCategory}>
            <a href={currentFilter} onClick={e => setCurrentFilter('WOMEN')}>WOMEN</a>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <a href={currentFilter} onClick={e => setCurrentFilter('MEN')}>MEN</a>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <a href={currentFilter} onClick={e => setCurrentFilter('KIDS')}>KIDS</a>
          </div>
        </li>
      </ul>     
    </div>   
  );
};

export default CategoryFilter;