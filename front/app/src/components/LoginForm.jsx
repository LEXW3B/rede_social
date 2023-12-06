import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import styles from "../assets/LoginForm.module.css";

function LoginForm() {
  const [name, setName] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false
  });

  const [surname, setSurname] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false
  });

  const [date, setDate] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false
  });

  const [tel, setTel] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false
  });

  const [email, setEmail] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false,
  });

  const [password, setPassword] = useState({
    value: "",
    error: "",
    hasError: true,
    wasTouched: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const validateName = (name) => {
    const containsLetter = /[a-zA-Z]/.test(name);
    const hasMinimumLength = name.length >= 3;

    return containsLetter && hasMinimumLength;
  };

  const validateEmail = (Email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(Email);
  };

  const validatePassword = (passWord) => {
    if (passWord.length < 6) return false;
    return true;
  };

  const validateDate = (date) => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
  };

  const validateTel = (tel) => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(tel);
  };

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      const isNameValid = validateName(value);
      setName({
        value,
        error: !isNameValid ? "Enter a valid name" : "",
        hasError: !isNameValid,
        wasTouched: true,
      });
    }
  }

  const handleSurnameChange = (event) => {
    const { name, value } = event.target;
    if (name === "surname") {
      const isSurnameValid = validateName(value);
      setSurname({
        value,
        error: !isSurnameValid ? "Enter a valid surname" : "",
        hasError: !isSurnameValid,
        wasTouched: true,
      });
    }
  }

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      const isDateValid = validateDate(value);
      setDate({
        value,
        error: !isDateValid ? "Enter a valid date" : "",
        hasError: !isDateValid,
        wasTouched: true,
      });
    }
  }

  const handleTelChange = (event) => {
    const { name, value } = event.target;
    if (name === "tel") {
      const isTelValid = validateTel(value);
      setTel({
        value,
        error: !isTelValid ? "Enter a valid phone number" : "",
        hasError: !isTelValid,
        wasTouched: true,
      });
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      const isEmailValid = validateEmail(value);
      setEmail({
        value,
        error: !isEmailValid ? "Enter a valid email" : "",
        hasError: !isEmailValid,
        wasTouched: true,
      });
    } else if (name === "password") {
      const isPasswordValid = validatePassword(value);
      setPassword({
        value,
        error: !isPasswordValid ? "Password must be at least 6 characters" : "",
        hasError: !isPasswordValid,
        wasTouched: true,
      });
    }
  };

  const handleSubmit = () => {
    if (name.hasError || surname.hasError || date.hasError || tel.hasError || email.hasError || password.hasError) return "Please fix the errors";
    return "Login successful";
  };

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={[styles.title, styles.title2].join(" ")}>sign-up</h1>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name.value}
            onChange={handleNameChange}
          />
          <br />
          {name.hasError && name.wasTouched && (
            <small className={styles.error}>{name.error}</small>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname.value}
            onChange={handleSurnameChange}
          />
          <br />
          {surname.hasError && surname.wasTouched && (
            <small className={styles.error}>{surname.error}</small>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="date">Date of Birth</label>
          <input
            type="date"
            name="date"
            value={date.value}
            onChange={handleDateChange}
          />
          <br />
          {date.hasError && date.wasTouched && (
            <small className={styles.error}>{date.error}</small>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="tel">Phone number</label>
          <input
            type="tel"
            name="tel"
            placeholder="(xx) xxx-xxxx"
            value={tel.value}
            onChange={handleTelChange}
          />
          <br />
          {tel.hasError && tel.wasTouched && (
            <small className={styles.error}>{tel.error}</small>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email.value}
            onChange={handleChange}
          />
          <br />
          {email.hasError && email.wasTouched && (
            <small className={styles.error}>{email.error}</small>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password</label>
          <div className={styles["password-wrapper"]}>
            <input
              className={styles["password-input"]}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password.value}
              name="password"
              onChange={handleChange}
            />
            {showPassword ? (
              <FaEyeSlash
                className={styles["show-password-input"]}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className={styles["show-password-input"]}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          {password.hasError && password.wasTouched && (
            <small>{password.error}</small>
          )}
        </fieldset>
        <fieldset className={styles["remember-wrapper"]}>
          <label htmlFor="remember" className={styles["remember-input"]}>
            <input
              type="checkbox"
              name="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />            
            <p>Remember me</p>
            <a href="https://accounts.google.com/" target="_blank" rel="noreferrer" >Forgot password?</a>
          </label>
        </fieldset>
        <button type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

export default LoginForm;
