import styles from './Container.module.scss';

const Container = (props) => {
  // const [currentFilter, setCurrentFilter] = useState('');
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
};

export default Container;