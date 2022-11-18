import styles from './CategoryFilter.module.scss';

const CategoryFilter = () => {
  return(
    <div className={styles.categories}>
      <ul> 
        <li>
          <div className={styles.singleCategory}>
            <a href="#" onClick={e => console.log('WOMEN FILTER')}>WOMEN</a>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <a href="#" onClick={e => console.log('MEN FILTER')}>MEN</a>
          </div>
        </li>
        
        <li>
          <div className={styles.singleCategory}>
            <a href="#" onClick={e => console.log('KIDS FILTER')}>KIDS</a>
          </div>
        </li>
      </ul>     
    </div>   
  );
};

export default CategoryFilter;