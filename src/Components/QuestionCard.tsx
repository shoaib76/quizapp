import React from 'react';
import { questionPropsType } from './../Types/quiz_types';

export const QuestionCard: React.FC<any> = ({ question, options, callback }) => {
    console.log(question, options)

    return (
        <div className="question-container">
            <div className="question">
                {question}
            </div>

            <form onSubmit={callback}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type="radio" name="opt" value={opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" />
            </form>

        </div>
    )
}