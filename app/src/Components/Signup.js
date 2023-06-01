import React from "react";
import { useState } from "react";
import SignupQuestionnaire from "./auth/SignupQuestionnaire";
import SignupForm from "./auth/SignupForm";
import SignupQuestionsOffer from "./auth/SignupQuestionsOffer";
import { APIBase } from "./data";
import { createSignupStatisticsPackage, createSignupUserPackage } from "../Scripts/requestPackageCreator";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        agreementChecked: false
    })

    function handleFormDataChange(event) {
        const { name, type, value, checked } = event.target
        if (type === "checkbox") {
            setFormData(prev => {
                return {
                    ...prev,
                    [name]: checked
                }
            })
        }
        else {
            setFormData(prev => {
                return {
                    ...prev,
                    [name]: value
                }
            })
        }
    }

    const [questionnaireData, setQuestionnaireData] = useState({
        goal: -1,   // цель
        time: -1,   // желаемое время тренировки
        areaArms: false,   // зона - руки
        areaCore: false,    // зона - пресс
        areaLegs: false,   // зона - ноги и ягодицы
        bustSize: -1,   // обхват груди
        waistSize: -1,  // обхват талии
        hipsSize: -1,   // обхват бёдер
        singleHipSize: -1,  // обхват бедра (одного)
        activityLevel: -1,  // уровень активности
        height: -1,     // рост
        weight: -1,     // вес
        age: -1,        // возраст
        gender: -1,     // пол
        fitnessLevel: -1    // физическая форма
    })

    function handleQuestionnaireDataChange(name, value) {
        setQuestionnaireData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const [signupStage, setSignupStage] = useState(0)

    function advanceSignupStage() {
        setSignupStage(prev => prev + 1)
    }

    return (
        <div className="signup-wallpaper">
            {(signupStage === 0) &&
                <SignupForm
                    formData={formData}
                    handleFormDataChange={handleFormDataChange}
                    finishFormFillUp={advanceSignupStage}
                />}
            {(signupStage === 1) &&
                <SignupQuestionsOffer
                    handleAccept={advanceSignupStage}
                    handleRefuse={sumbitSignupRequest}
                />}

            {(signupStage >= 2) &&
                <SignupQuestionnaire
                    stage={signupStage}
                    questionnaireData={questionnaireData}
                    handleQuestionnaireDataChange={handleQuestionnaireDataChange}
                    handleStageNext={advanceSignupStage}
                    handleSubmit={sumbitSignupRequest}
                />}
        </div>
    )

    async function sumbitSignupRequest() {
        const parcel = {
            email: formData.email,
            password: formData.password,
            ...questionnaireData
        }
        const userUrl = `${APIBase}/user/`
        const statUrl = `${APIBase}/statinsert/`
        const userData = createSignupUserPackage(parcel)
        const statData = createSignupStatisticsPackage(parcel)

        try {
            const userResponse = await fetch(userUrl, {
                method: 'POST',
                body: userData
            });

            if (userResponse.ok) {
                // Request successful
                // Get user id from backend
                console.log('POST request succeeded');
                document.cookie = `session_token=${parcel.email}`

                const statResponse = await fetch(statUrl, {
                    method: 'POST',
                    body: statData
                })

                if (statResponse.ok) {
                    console.log("Initial statistics POST successful")
                    props.setSession(true)
                    navigate("/catalog")
                }
                else {
                    console.log("Initial statistics POST failed")
                }
            }
            else {
                // Request failed
                console.log('POST request failed');
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
}