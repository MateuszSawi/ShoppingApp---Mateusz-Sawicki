import styles from './Description.module.scss';

const Description = (props) => {
  return (<p className={styles.description}>{props.data.description}</p>);
};

export default Description;
