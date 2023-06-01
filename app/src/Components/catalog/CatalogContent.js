import React from "react";
import WorkoutCard from "./WorkoutCard";
import { durationThresholds } from "./DurationFilterBox";
import * as workoutFilterData from "../../Scripts/workoutFilterData";

export default function CatalogContent(props) {
    const workouts = props.data.map(workout => {
        // Рендерим только тренировки подходящие под запрос поисковой строки
        if (!(matchesSearchQuery(props.searchQuery, workout.NameOfTraining))) {
            return null
        }
        // Проверяем соответствие установленным фильтрам
        if (!(matchesFilter(props.filterData, workout))) {
            return null
        }

        return (
            <WorkoutCard
                key={workout.id}
                id={workout.id}
                name={workout.NameOfTraining}
                previewSrc={workout.Img}
                duration={workout.TimeMovies}
                difficulty={workout.Difficulty}
                video={workout.LinkVideo}
                inventory={workout.Inventory}
                area={workout.StudyArea}
            />
        )
    })

    const isSearchResultEmpty = workouts.every((item) => item == null)

    return (
        <div className="catalog-list-container">
            {workouts}
            {/* Если результаты поиска и фильтра нулевые, надо отобразить соответствующее сообщение */}
            {isSearchResultEmpty && <div className="catalog-content-message-no-result">Ничего не найдено</div>}
        </div>
    )
}

function matchesSearchQuery(query, name) {
    // Если поисковая строка пуста, то пропускаем проверку
    if (query === "") {
        return true
    }
    // Переводим название тренировки и поисковый запрос в верхний регистр т.к.
    // String.prototype.includes() производит case-sensetive поиск
    const nameCaps = name.toUpperCase()
    const queryCaps = query.toUpperCase()
    return (nameCaps.includes(queryCaps))
}

function matchesFilter(filterData, workoutData) {
    const durationCheck = filterDurationMatch(filterData.durationThresholdsSelection, workoutData.TimeMovies)
    const inventoryCheck = filterGeneralMatch(filterData.inventorySelection, workoutData.Inventory, workoutFilterData.InventoryFilterData.checks)
    const areaCheck = filterGeneralMatch(filterData.areaSelection, workoutData.StudyArea, workoutFilterData.AreaFilterData.checks)
    const difficultyCheck = filterGeneralMatch(filterData.difficultySelection, workoutData.Difficulty, workoutFilterData.DifficultyFilterData.checks)
    return (durationCheck && inventoryCheck && areaCheck && difficultyCheck)
}

function filterDurationMatch(thresholdsSelection, workoutDuration) {
    // Если ни один чекбокс не отмечен, пропускаем проверку
    if (thresholdsSelection.every((item) => item === false)) {
        return true
    }
    for (var i = 0; i < thresholdsSelection.length; i++) {
        // Невыделенные чекбоксы пропускаем
        if (thresholdsSelection[i] === false) continue

        var lowerSec = durationThresholds[i].lower * 60
        var upperSec = durationThresholds[i].upper * 60
        // У последнего временного интервала нет верхнего предела
        // Для отображения этого свойству upper было присвоено значение -1
        if (workoutDuration >= lowerSec && (workoutDuration <= upperSec || upperSec <= 0)) {
            return true
        }
    }
    return false
}

function filterGeneralMatch(filterSelection, workoutValue, comparisonTemplate) {
    // Если ни один чекбокс не отмечен, пропускаем проверку
    if (filterSelection.every((item) => item === false)) {
        return true
    }
    for (var i = 0; i < filterSelection.length; i++) {
        if (filterSelection[i] === false) continue

        if (comparisonTemplate[i].value === workoutValue) {
            return true
        }
    }
    return false;
}
