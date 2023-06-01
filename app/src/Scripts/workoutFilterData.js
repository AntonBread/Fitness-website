export const WorkoutDifficulty = Object.freeze({
    BEGINNER: 0,
    INTERMEDIATE: 1,
    ADVANCED: 2,
})

export const WorkoutInventory = Object.freeze({
    NONE: "0",
    BASIC: "1",
    GYM: "2"
})

export const WorkoutArea = Object.freeze({
    ARMS: "TOP",
    CORE: "MED",
    LEGS: "BOT",
})

export const InventoryFilterData = {
    title: "Снаряжение",
    checks: [
        {
            label: "Без снаряжения",
            value: WorkoutInventory.NONE
        },
        {
            label: "Базовое снаряжение",
            value: WorkoutInventory.BASIC
        },
        {
            label: "Всё снаряжение зала",
            value: WorkoutInventory.GYM
        }
    ]
}

export const DifficultyFilterData = {
    title: "Уровень сложности",
    checks: [
        {
            label: "Начинающий",
            value: WorkoutDifficulty.BEGINNER
        },
        {
            label: "Средний",
            value: WorkoutDifficulty.INTERMEDIATE
        },
        {
            label: "Продвинутый",
            value: WorkoutDifficulty.ADVANCED
        }
    ]
}

export const AreaFilterData = {
    title: "Группа мышц",
    checks: [
        {
            label: "Руки и плечи",
            value: WorkoutArea.ARMS
        },
        {
            label: "Пресс и корпус",
            value: WorkoutArea.CORE
        },
        {
            label: "Ягодицы и ноги",
            value: WorkoutArea.LEGS
        }
    ]
}

export const FilterData = [InventoryFilterData, AreaFilterData, DifficultyFilterData]

export function getDifficultyName(difficulty) {
    switch (difficulty) {
        case WorkoutDifficulty.BEGINNER:
            return "Начинающий"
        case WorkoutDifficulty.INTERMEDIATE:
            return "Средний"
        case WorkoutDifficulty.ADVANCED:
        default:
            return "Продвинутый"
    }
}

export function getAreaName(area) {
    switch (area) {
        case WorkoutArea.LEGS:
            return "Ноги и ягодицы"
        case WorkoutArea.CORE:
            return "Пресс и корпус"
        case WorkoutArea.ARMS:
        default:
            return "Плечи и руки"
    }
}

export function getInventoryName(inventory) {
    switch (inventory) {
        case WorkoutInventory.NONE:
            return "Снаряжение не требуется"
        case WorkoutInventory.BASIC:
            return "Базовое снаряжение"
        case WorkoutInventory.GYM:
        default:
            return "Всё снаряжение зала"
    }
}