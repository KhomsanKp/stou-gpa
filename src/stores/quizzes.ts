import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useQuizzesStore = defineStore('quizzes', () => {
    const quizzes = ref<Array<Quizzes>>([
        {
            id: 'b001',
            code: '10111',
            name: 'ภาษาอังกฤษเพื่อการสื่อสาร',
            quizzTest: [
                {
                    id: 'q001',
                    no: '1',
                    test: 'before',
                    question: 'A: Hello, Pete! B: __________',
                    option_1: 'Hi there!',
                    option_2: 'What\'s new?',
                    option_3: 'How do you do?',
                    option_4: 'What do yor do?',
                    option_5: 'Good to meet you.',
                    answer: 'Hi there!'
                },
                {
                    id: 'q002',
                    no: '2',
                    test: 'before',
                    question: 'A: How old are you? B: __________',
                    option_1: 'Six',
                    option_2: 'Six years.',
                    option_3: 'I\'m six old years.',
                    option_4: 'I\'m six years old.',
                    option_5: 'I\'ve six years of age.',
                    answer: 'I\'m six years old.'
                }
            ],
            createDate: ''
        }
    ])

    const getQuizzes = computed(() => quizzes.value)

    return { getQuizzes }
})

interface Quizzes {
    id: String,
    code: String,
    name: String,
    quizzTest: Array<QuizzesTest>,
    createDate: String
}

interface QuizzesTest {
    id: String
    no: String
    test: String
    question: String,
    option_1: String,
    option_2: String,
    option_3: String,
    option_4: String,
    option_5: String,
    answer: String
}