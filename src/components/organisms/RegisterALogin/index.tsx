import React, { useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { set } from 'lodash';
import { addDocument, getDocuments } from 'src/helpers/documentServices';
import { auth } from 'src/helpers/firebase';

const { width, height } = Dimensions.get('window');

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { colors } = useTheme();

  const checkEmail = async () => {
    const refactoredMail = email.trim().toLowerCase();
    const users: { id: string; email?: string }[] = await getDocuments('users');
    const user = users.find(user => user.email === refactoredMail);
    return user ? true : false;
  };

  const handleRegister = async () => {
    const refactoredMail = email.trim().toLowerCase();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, refactoredMail, password);
      const user = userCredential.user;
      await addDocument(user.uid, 'users', { uid: user.uid, email: refactoredMail });

      handleLogin();
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    const refactoredMail = email.trim().toLowerCase();
    try {
      await signInWithEmailAndPassword(auth, refactoredMail, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (index === 0 && !emailRegex.test(email)) {
      Alert.alert('Geçerli bir email adresi giriniz!');
      return;
    }

    if (index === 1 && password === '') {
      Alert.alert('Şifre alanı boş bırakılamaz!');
      return;
    }

    if (index === 0) {
      checkEmail()
        .then(isExist => {
          if (isExist) {
            setIsRegistered(true);
          } else {
            setIsRegistered(false);
          }
        })
        .finally(() => {
          const nextIndex = index + 1;
          setIndex(nextIndex);
          Animated.spring(scrollX, {
            toValue: nextIndex * width,
            useNativeDriver: true,
          }).start();
        });

      return;
    }

    if (isRegistered) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const handleBack = () => {
    const prevIndex = index - 1;
    setIndex(prevIndex);
    Animated.spring(scrollX, {
      toValue: prevIndex * width,
      useNativeDriver: true,
    }).start();
  };

  const textManager = () => {
    if (index === 0) {
      return 'Email adresinizi giriniz';
    }

    if (!isRegistered) {
      return 'Şifre oluşturunuz';
    }

    if (index === 1) {
      return 'Şifrenizi giriniz';
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps='always'>
          <Text style={{ textAlign: 'center', marginBottom: 8, fontSize: 18, color: colors.text }}>
            {textManager()}
          </Text>
          <Animated.View
            style={[
              styles.animatedContainer,
              { transform: [{ translateX: Animated.multiply(scrollX, -1) }] },
            ]}>
            <View style={styles.page}>
              <TextInput
                ref={emailInputRef}
                style={[styles.input, { borderColor: colors.text }]}
                selectionColor={colors.text}
                value={email}
                onChangeText={setEmail}
                placeholder='Email'
                returnKeyType='next'
                onSubmitEditing={() => handleNext()}
              />
            </View>
            <View style={styles.page}>
              <TextInput
                ref={passwordInputRef}
                style={[styles.input, { borderColor: colors.text }]}
                selectionColor={colors.text}
                value={password}
                onChangeText={setPassword}
                placeholder='Password'
                secureTextEntry
                returnKeyType='done'
                onSubmitEditing={() => handleNext()}
              />
            </View>
          </Animated.View>
          <View style={styles.buttonContainer}>
            <View style={{ opacity: index > 0 ? 1 : 0 }}>
              <Button color={colors.text} onPress={handleBack} title='Geri' />
            </View>
            <Button
              color={colors.text}
              onPress={index === 1 ? handleRegister : handleNext}
              title='Sonraki'
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  animatedContainer: {
    flexDirection: 'row',
    width: width * 2, // toplam iki sayfamız olduğu için iki kat genişlik veriyoruz
  },
  page: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 20,
  },
});
