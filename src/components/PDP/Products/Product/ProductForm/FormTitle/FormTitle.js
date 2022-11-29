import styles from "./FormTitle.module.scss";

const FormTitle = props => {
  return(
    <div className={styles.formTitle}>
      <h1>{props.data.name}</h1>
      <h2>{props.data.state}</h2>
    </div>
  )
}

export default FormTitle;