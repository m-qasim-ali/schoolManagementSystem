import {View, Text, ScrollView} from 'react-native';
const AnswerScreen = props => {
  const {question} = props.route.params;
  const {answer} = props.route.params;
  const {questionNo} = props.route.params;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          top: 20,
          gap: 20,
          marginBottom: 50,
        }}>
        <View
          style={{
            width: '90%',
            borderWidth: 0,
            borderTopWidth: 8,
            borderRadius: 12,
            borderColor: '#0C46C4',
            padding: 12,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            backgroundColor: '#f7fcfb',
            shadowOpacity: 0.1,
            elevation: 5,
          }}>
          <Text style={{fontSize: 20, fontWeight: '900', color: '#0C46C4'}}>
            Question {questionNo}
          </Text>

          <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
            {question}
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            borderWidth: 0,
            borderTopWidth: 8,
            borderRadius: 12,
            borderColor: '#0C46C4',
            padding: 12,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            backgroundColor: '#f7fcfb',
            shadowOpacity: 0.1,
            elevation: 5,
          }}>
          <Text style={{fontSize: 20, fontWeight: '900', color: '#0C46C4'}}>
            Answer
          </Text>

          <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
            {answer}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default AnswerScreen;
