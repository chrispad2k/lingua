import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'

import { translateText } from './Translate'
const languages = require('../languages.json')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.translate = this.translate.bind(this)

    this.state = {
      translations: [
        'Nothing translated yet!',
        "Still nothing translated, i'm sorry",
      ],
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.listContainer}>
              <FlatList
                data={this.state.translations}
                renderItem={(item) => {
                  // console.log(item)
                  return (
                    <Text style={styles.listItem} key={item.index}>
                      {item.item}
                    </Text>
                  )
                }}
              />
            </View>
            <Button onPress={this.translate} title="Translate" />
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

  translate() {
    translateText('Bonjour', 'auto', 'en').then((res) => {
      const data = res.json()
      console.log(data)
      const translatedText = data.translations.map(
        (item) => item.translatedText,
      )
      this.setState({ translations: translatedText })
    })
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  listContainer: {
    flex: 1,
    paddingTop: 22,
  },
  listItem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default App
