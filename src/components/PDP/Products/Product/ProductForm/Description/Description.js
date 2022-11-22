import styles from './Description.module.scss';
import clsx from 'clsx';

const Description = (props) => {
  // console.log(props.data.description);
  return (<p className={styles.description}>{props.data.description}</p>);
};

export default Description;
