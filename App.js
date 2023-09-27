import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview'

export default function App() {
  let htmlCode = require('./assets/htmlFile.html')
  return (
    <View style={styles.container}>
      <WebView 
        style={{flex: 1}}
        source={htmlCode}
        userAgent='Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' // without userAgent says "Browser not supported"
        javaScriptEnabled
        originWhitelist={['*']} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    marginHorizontal: 5,
    borderWidth: 1
  }
});