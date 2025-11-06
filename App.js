import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const quizQuestions = [
{
  id: 1,
  question: "Pyetja 1",
  options: ["op 1", "op 2",
            "op 3", "op 4"
  ],
  CorrectAnswer: 0
},
{
  id: 2,
  question: "Pyetja 2",
  options: ["op 1", "op 2",
            "op 3", "op 4"
  ],
  CorrectAnswer: 0
}
]


export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];
  


  return (
    <View style={styles.container}>
      <Text style ={styles.title}>
      Quiz App
      </Text>

      <Text>
      Question {(currentQuestion + 1)} of {quizQuestions.length}
      </Text>

    <Text>
      {question.question}
      </Text>

       <Text>
      {question.options.map((option, index)=> {
        {option}
      })}
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbddddff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#6d68a8ff',
  },
  progress: {
    fontSize: 16,
    textAlign: 'center',
    color:'#767272ff',
    marginBottom: 20
  },
  questoinContainer: {
    backgroundColor:  '#fff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 20, 
    shadowColor: '#000',
    shadowOffset:  {width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  questionText: {
    fontSize: 20,
    color: '#2c3e50',
    lineHeight:28
  }
});
