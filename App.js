import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const quizQuestions = [
  {
    id: 1,
    question: "Cili është gjuha kryesore e përdorur për zhvillimin e aplikacioneve React Native?",
    options: ["Java", "Python", "JavaScript", "C#"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Cili është protokolli standard për komunikimin në internet?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Cila është njësia e matjes së tensionit elektrik?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Cili është planeti më i madh në sistemin diellor?",
    options: ["Toka", "Mërkuri", "Jupiter", "Mars"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Cili është sistemi operativ i zhvilluar nga Apple për iPhone?",
    options: ["Android", "iOS", "Windows", "Linux"],
    correctAnswer: 1
  }
];

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const question = quizQuestions[currentQuestion];

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === question.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(quizQuestions.length);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  if (currentQuestion >= quizQuestions.length) {
    const percentage = (score * 100) / quizQuestions.length;

    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Rezultati Yt</Text>
          <Text style={styles.scoreText}>
            {score} / {quizQuestions.length}
          </Text>
          <Text style={styles.percentageText}>
            {percentage.toFixed(0)}%
          </Text>
        </View>

        <TouchableOpacity style={styles.restartButton} onPress={restartQuiz}>
          <Text style={styles.restartText}>Rifillo kuizin</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kuiz Edukativ</Text>
      <Text style={styles.progress}>
        Pyetja {currentQuestion + 1} nga {quizQuestions.length}
      </Text>

      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(index)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1f1f2e'
  },
  progress: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  questionText: {
    fontSize: 20,
    color: '#2c3e50',
    lineHeight: 28
  },
  optionButton: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    width: 280,
    alignItems: 'center'
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  optionsContainer: {
    marginBottom: 10
  },
  resultContainer: {
    backgroundColor: '#ffffff',
    padding: 40,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30
  },
  resultLabel: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10
  },
  scoreText: {  
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f1f2e',
    marginBottom: 8
  },
  percentageText: {  
    fontSize: 18,
    color: '#4a90e2',
    fontWeight: 'bold',
    marginBottom: 10
  },
  restartButton: {
    backgroundColor: '#681a77ff',
    padding: 14,
    borderRadius: 10
  },
  restartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
