import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import Input from "./Input";
import { Colors } from "../../constants/styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";


function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [rememberPassword, setRememberPassword] = useState(false);

  const {
    name: nameIsInvalid,
    email: emailIsInvalid,
    password: passwordIsInvalid,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "name":
        setEnteredName(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      name: enteredName,
      password: enteredPassword,
    });
  }

  return (
    <View style={styles.formContainer}>
      {isLogin ? (
        <Text style={styles.heading}>Welcome Back!</Text>
      ) : (
        <Text style={styles.heading}>Create an Account</Text>
      )}
      {!isLogin && (
        <View
          style={[
            styles.inputContainer,
            styles.nameInputContainer,
            nameIsInvalid && styles.invalid,
          ]}
        >
          <FontAwesome5
            name="user"
            size={20}
            color="#2f3164"
            style={styles.icon}
          />
          <Input
            style={styles.textInput}
            placeholder="Full Name"
            onUpdateValue={updateInputValueHandler.bind(this, "name")}
            secure={false}
            keyboardType="default"
            value={enteredName}
            isInvalid={nameIsInvalid}
          />
        </View>
      )}
      <View
        style={[
          styles.inputContainer,
          styles.emailInputContainer,
          emailIsInvalid && styles.invalid,
        ]}
      >
        <FontAwesome
          name="envelope"
          size={20}
          color="#2f3164"
          style={styles.icon}
        />
        <Input
          placeholder="Email"
          onUpdateValue={updateInputValueHandler.bind(this, "email")}
          secure={false}
          keyboardType="email-address"
          isInvalid={emailIsInvalid}
          value={enteredEmail}
        />
      </View>

      <View
        style={[styles.inputContainer, passwordIsInvalid && styles.invalid]}
      >
        <FontAwesome
          name="lock"
          size={20}
          color="#2f3164"
          style={styles.icon}
        />
        <Input
          placeholder="Password"
          onUpdateValue={updateInputValueHandler.bind(this, "password")}
          secure={hidePassword}
          keyboardType="default"
          isInvalid={passwordIsInvalid}
          value={enteredPassword}
        />
        <TouchableOpacity
          style={styles.secureTextEntry}
          onPress={() => setHidePassword(!hidePassword)}
        >
          <FontAwesome
            name={hidePassword ? "eye" : "eye-slash"}
            size={20}
            color="#2f3164"
          />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <BouncyCheckbox
          onPress={(isChecked) => {
            setRememberPassword(isChecked);
          }}
          size={20}
          fillColor="#2f3164"
          unfillColor="#FFFFFF"
          text="Remember Password"
          iconStyle={{
            borderColor: "#2f3164",
          }}
          textStyle={{
            marginLeft: -8,
            fontSize: 14,
            color: "#2f3164",
            textDecorationLine: "none",
          }}
        />
        {isLogin && (
          <TouchableOpacity>
            <Text style={{ color: "#2f3164", fontWeight: "700" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.buttonText}>
            {isLogin ? "Sign In" : "Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
          paddingBottom: 20,
        }}
      >
        <View style={styles.line}></View>
        <Text style={{ width: "33.33%", textAlign: "center" }}>
          Or {isLogin ? "sign in" : "sign up"} with
        </Text>
        <View style={styles.line}></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          paddingBottom: 40,
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[styles.button, styles.googleButton]}>
            <Text style={{ textAlign: "center", fontWeight: "600" }}>
              <FontAwesome5 name="google" size={25} /> Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={[styles.button, styles.appleButton]}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
              }}
            >

              <FontAwesome5 name="apple" size={25} color="#000" /> Apple
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  heading: {
    fontWeight: "700",
    fontSize: 28,
    color: "#2f3164",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  emailInputContainer: {
    justifyContent: "flex-start",
  },
  textInput: {
    height: "100%",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  image:{
    height: 25,
    width: "auto"
  },
  secureTextEntry: {
    padding: 10,
  },
  buttonContainer: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#2f3164",
    paddingVertical: 13,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  appleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  line: {
    height: 1,
    width: "33.33%",
    backgroundColor: "gray",
  },

  icon: {
    marginRight: 10,
  },
  invalid: {
    backgroundColor: Colors.error100,
  },
  nameInputContainer: {
    justifyContent: "flex-start",
  },
});
