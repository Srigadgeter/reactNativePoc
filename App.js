/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import './src/i18n';

const App: () => Node = () => {
  const [text, onChangeText] = useState('');

  const {t, i18n} = useTranslation();

  const handleChangeLang = () => {
    i18n?.changeLanguage(i18n?.language === 'ar' ? 'en' : 'ar');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View>
        <Text>{t('hello')}</Text>
        <Text>{t('read docs')}</Text>
      </View>
      <TextInput
        value={text}
        style={styles.input}
        onChangeText={onChangeText}
      />
      <Button title={t('change lang')} onPress={handleChangeLang} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    padding: '5%',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
