import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Button, View} from 'react-native';

const App = () => {
  const handleKakaoLogin = async () => {
    const token: KakaoOAuthToken = await login();

    console.log('handleKakaoLogin', 'success', token);
  };

  return (
    <View
      style={{flex: 1, justifyContent: 'center'}}>
      <Button title="카카오 로그인" onPress={handleKakaoLogin} />
    </View>
  );
};

export default App;
