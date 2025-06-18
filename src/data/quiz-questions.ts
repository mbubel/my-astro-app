export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
    correctAnswer: 2,
    category: 'Art & History',
    difficulty: 'medium',
  },
  {
    id: 4,
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 3,
    category: 'Geography',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Which programming language was created by Brendan Eich?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 2,
    category: 'Technology',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'What year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: 2,
    category: 'History',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'What is the chemical symbol for gold?',
    options: ['Ag', 'Au', 'Fe', 'Cu'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'Which company owns Instagram?',
    options: ['Google', 'Facebook', 'Twitter', 'Microsoft'],
    correctAnswer: 1,
    category: 'Technology',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'What is the largest mammal in the world?',
    options: ['African Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
  },
  {
    id: 10,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 1,
    category: 'Literature',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'What is the main component of the sun?',
    options: ['Liquid Lava', 'Molten Iron', 'Hot Gases', 'Solid Rock'],
    correctAnswer: 2,
    category: 'Science',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'Which country is home to the kangaroo?',
    options: ['New Zealand', 'South Africa', 'Australia', 'India'],
    correctAnswer: 2,
    category: 'Geography',
    difficulty: 'easy',
  },
  {
    id: 13,
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    category: 'Mathematics',
    difficulty: 'easy',
  },
  {
    id: 14,
    question: "Which element has the chemical symbol 'O'?",
    options: ['Osmium', 'Oxygen', 'Oganesson', 'Osmium'],
    correctAnswer: 1,
    category: 'Science',
    difficulty: 'easy',
  },
  {
    id: 15,
    question: 'What is the largest desert in the world?',
    options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'],
    correctAnswer: 3,
    category: 'Geography',
    difficulty: 'medium',
  },
];

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: number[];
  isComplete: boolean;
  showFeedback: boolean;
}
