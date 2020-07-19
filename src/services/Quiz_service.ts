
import { Quiz, QuestionType } from '../Types/quiz_types';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const getQuaiDetails = async (totalQuestion: number, level: String): Promise<QuestionType[]> => {

    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    console.log(results);
    const quiz: QuestionType[] = results.map((qusetionObj: Quiz) => {
        return {
            question: qusetionObj.question,
            answer: qusetionObj.correct_answer,
            option: shuffleArray(qusetionObj.incorrect_answers.concat(qusetionObj.correct_answer))

        }
    })
    return quiz;


}