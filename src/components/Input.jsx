import "../static/css/form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function Input({
  state,
  setState,
  type,
  name,
  label,
  placeholder,
  msgError,
  regularExpression,
  functionAux
}) {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validate = () => {
    regularExpression && regularExpression.test(state.field)
      ? setState({ ...state, valid: true })
      : setState({ ...state, valid: false });

    functionAux && functionAux();
  };

  return (
    <div>
      <label
        htmlFor={name}
        className={
          state.valid === null
            ? "label"
            : state.valid
            ? "label-true"
            : "label-false"
        }
      >
        {label}
      </label>
      <div className="inputContainer">
        <input
          className={
            state.valid === null
              ? "inputs"
              : state.valid
              ? "inputs-true"
              : "inputs-false"
          }
          placeholder={placeholder}
          name={name}
          type={type}
          value={state.field}
          id={name}
          onChange={onChange}
          onKeyUp={validate}
          onBlur={validate}
        />
        <FontAwesomeIcon className={
            state.valid === null
              ? "iconValidate"
              : state.valid
              ? "iconValidate-true"
              : "iconValidate-false"
          } icon={state.valid ? faCheckCircle : faTimesCircle} />
      </div>
      <p className={ state.valid === false ? "text-error" : "text-error-true" }>{msgError}</p>
    </div>
  );
}
