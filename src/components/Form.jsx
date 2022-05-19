import "../static/css/form.css";
import { useState } from "react";
import { expresiones } from '../helpers/expresiones-regulares'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";

export default function Form() {
  const [user, setUser] = useState({ field: "", valid: null });
  const [name, setName] = useState({ field: "", valid: null });
  const [email, setEmail] = useState({ field: "", valid: null });
  const [phone, setPhone] = useState({ field: "", valid: null });
  const [password, setPassword] = useState({ field: "", valid: null });
  const [password2, setPassword2] = useState({ field: "", valid: null });

  return (
    <form action="" id="form">
      <Input
        state={user}
        setState={setUser}
        type="text"
        name="user"
        label="Nombre de Usuario"
        placeholder="User"
        msgError="El nombre de usuario tiene que ser de 4 a 16 digitos y solo puede usar letras"
        regularExpression={expresiones.user}
      />
      <Input
        state={name}
        setState={setName}
        type="text"
        name="name"
        label="Nombre Y Apellido"
        placeholder="Jaun P."
        msgError="El nombre solo puede contener letras y espacios."
        regularExpression={expresiones.name}
      />      
      <Input
        state={password}
        setState={setPassword}
        type="password"
        name="password"
        label="Password"
        placeholder="12345678"
        msgError="La contraseña debe contener entre 4 a 16 digitos"
        regularExpression={expresiones.password}
      />
      <Input
        state={password2}
        setState={setPassword2}
        type="password"
        name="Repita la contraseña"
        label="Password2"
        placeholder="12345678"
        msgError="Ambas contraseñas deben ser iguales"
        
      />
      <Input
        state={email}
        setState={setEmail}
        type="email"
        name="email"
        label="Email"
        placeholder="User@gmail.com"
        msgError="El correo no puede contener simbolos"
        regularExpression={expresiones.email}
      />
      <Input
        state={phone}
        setState={setPhone}
        type="text"
        name="phone"
        label="Telefono"
        placeholder="+54121312313"
        msgError="El telefono solo puede contener numeros y el maximo son 12"
        regularExpression={expresiones.phone}
      />
      <div className="containerTermino ">
        <input type="checkbox" name="terminos" id="terminos" />
        Acepto los Terminos y Condiciones.
      </div>
      {false && (
        <div className="msg-error">
          <p className="text-msg-error">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <b> Error</b> Por favor rellene el formulario correctamente.
          </p>
        </div>
      )}
      <div className="containerButton">
        <button type="submit" className="formButton">
          Enviar
        </button>
        <p className="msg-success">El formulario se envio correctamente!</p>
      </div>
    </form>
  );
}
