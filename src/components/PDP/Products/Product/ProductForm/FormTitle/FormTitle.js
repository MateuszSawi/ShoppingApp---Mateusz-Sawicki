import styles from "./FormTitle.module.scss";
import PropTypes from 'prop-types';

const FormTitle = props => {
  // console.log("FormTitle: ", props.data.name);
  return(
    <div className={styles.formTitle}>
      <h1>{props.data.name}</h1>
      <h2>{props.data.state}</h2>
    </div>
  )
}

export default FormTitle;