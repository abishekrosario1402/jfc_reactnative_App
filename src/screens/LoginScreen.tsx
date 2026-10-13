import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <ImageBackground
      source={require("../../assets/jfc-church.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.logo}>JFC</Text>
          <Text style={styles.welcome}>Welcome back</Text>

          {/* Mobile Number */}
          <Text style={styles.label}>Mobile Number</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="phone-portrait-outline"
              size={25}
              color="#FFFFFF"
              style={styles.icon}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              placeholderTextColor="#FFFFFF"
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={25}
              color="#FFFFFF"
              style={styles.icon}
            />

            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#FFFFFF"
              secureTextEntry
            />
          </View>

          {/* Forgot Password */}
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          {/* OR */}
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Sign Up */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?{" "}
            </Text>

            <TouchableOpacity>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.30)",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },

  welcome: {
    fontSize: 22,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 55,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  inputContainer: {
    height: 65,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginBottom: 28,
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },

  icon: {
    marginRight: 15,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#FFFFFF",
  },

  forgotContainer: {
    alignItems: "flex-end",
    marginTop: -15,
    marginBottom: 35,
  },

  forgot: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  loginButton: {
    height: 65,
    backgroundColor: "#168DF5",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 35,
  },

  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#FFFFFF",
  },

  orText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  signupText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  signup: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});