export function createSignupUserPackage(parcel) {
    const data = new FormData()
    data.append("Goal", parcel.goal)
    data.append("TrainingTime", parcel.time)
    data.append("UpArms", parcel.areaArms)
    data.append("UpStomach", parcel.areaCore)
    data.append("UpLegs", parcel.areaLegs)
    data.append("Activity", parcel.activityLevel)
    data.append("Height", parcel.height)
    data.append("Old", parcel.age)
    data.append("Sex", parcel.gender)
    data.append("Phys", parcel.fitnessLevel)
    data.append("email", parcel.email)
    data.append("password", parcel.password)
    
    return data
}

export function createSignupStatisticsPackage(parcel) {
    const data = new FormData()
    data.append("UserEmail", parcel.email)
    data.append("Breast", parcel.bustSize)
    data.append("Waist", parcel.waistSize)
    data.append("Hips", parcel.hipsSize)
    data.append("Legs", parcel.singleHipSize)
    data.append("Weight", parcel.weight)

    return data
}