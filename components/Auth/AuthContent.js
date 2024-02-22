import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import AuthNav from "../ui/AuthNav";
import AuthForm from "./AuthForm";
import AuthFooter from "../ui/AuthFooter";

function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    name: false,
  });

  function submitHandler(credentials) {
    let { email, password, name } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const nameIsValid = name.length > 2;

    if (!emailIsValid || !passwordIsValid ||(!isLogin && !nameIsValid)) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        name: !nameIsValid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.container}>
      <AuthNav isLogin={isLogin} />
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <AuthFooter />
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee",
  },
});
