import React from "react";
import QuestionnaireGoal from "../signup_questions/QuestionnaireGoal";
import QuestionnaireTime from "../signup_questions/QuestionnaireTime";
import QuestionnaireArea from "../signup_questions/QuestionnaireArea";
import QuestionnaireGirths from "../signup_questions/QuestionnaireGirths";
import QuestionnaireActivity from "../signup_questions/QuestionnaireActivity";
import QuestionnaireHeight from "../signup_questions/QuestionnaireHeight";
import QuestionnaireWeight from "../signup_questions/QuestionnaireWeight";
import QuestionnaireAge from "../signup_questions/QuestionnaireAge";
import QuestionnaireGender from "../signup_questions/QuestionnaireGender";
import QuestionnaireFitness from "../signup_questions/QuestionnaireFitness";

export default function QuestionnaireBody(props) {
    return (
        <div className="signup-questionnaire-body-container" style={{ position: "relative", overflow: "hidden" }}>
            {props.count === 0 && <QuestionnaireGoal
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 1 && <QuestionnaireTime
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 2 && <QuestionnaireArea
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 3 && <QuestionnaireGirths
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 4 && <QuestionnaireActivity
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 5 && <QuestionnaireHeight
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 6 && <QuestionnaireWeight
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 7 && <QuestionnaireAge
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 8 && <QuestionnaireGender
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
            {props.count === 9 && <QuestionnaireFitness
                data={props.data}
                handleDataChange={props.handleDataChange}
                setAreInputsEmpty={props.setAreInputsEmpty}
            />}
        </div>
    )
}