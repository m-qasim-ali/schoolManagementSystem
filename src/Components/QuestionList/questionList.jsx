import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
const QuestionList = props => {
  const questionList = [
    {
      Question:
        'What is your name?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?',
      Answer: 'I am Alright',
    },
    {
      Question:
        'What is your name?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?',
      Answer: 'I am Alright',
    },
    {
      Question:
        'What is your name?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?',
      Answer: 'I am Alright',
    },
    {
      Question:
        'What is your name?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?',
      Answer: 'I am Alright',
    },
    {
      Question:
        'What is your name?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?Who are you?',
      Answer: 'I am Alright',
    },
  ];
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
        {questionList.map((data, index) => (
          <View
            key={index}
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
              Question
            </Text>

            <Text style={{fontSize: 12, fontWeight: '400', color: 'black'}}>
              {data.Question}
            </Text>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() =>
                props.navigation.navigate({
                  name: 'AnswerScreen',
                  params: {
                    question: data.Question,
                    answer: data.Answer,
                    questionNo: index+1,
                  },
                })
              }>
              <Text
                style={{color: '#0C46C4', textAlign: 'right', fontSize: 16}}>
                View
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
export default QuestionList;
