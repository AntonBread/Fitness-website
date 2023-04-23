// PLACEHOLDER WORKOUT DATA FILE

import { WorkoutInventory, WorkoutArea, WorkoutDifficulty } from "../Scripts/workoutFilterData"

const workoutdata = [{
    id: 1,
    name: "Тренировка 1",
    previewImageSrc: "https://cross.expert/wp-content/uploads/2017/01/uprazhneniya-dlya-pressa-v-domashnih-usloviyah-podnyatie-nogi.jpeg",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 420,
    inventory: WorkoutInventory.NONE,
    area: WorkoutArea.CORE,
    difficulty: WorkoutDifficulty.BEGINNER,
    exercises: [
        {
            imageSrc: "https://cross.expert/wp-content/uploads/2017/01/uprazhneniya-dlya-pressa-v-domashnih-usloviyah-podnyatie-nogi.jpeg",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://cross.expert/wp-content/uploads/2017/01/uprazhneniya-dlya-pressa-v-domashnih-usloviyah-podnyatie-nogi.jpeg",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://cross.expert/wp-content/uploads/2017/01/uprazhneniya-dlya-pressa-v-domashnih-usloviyah-podnyatie-nogi.jpeg",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://cross.expert/wp-content/uploads/2017/01/uprazhneniya-dlya-pressa-v-domashnih-usloviyah-podnyatie-nogi.jpeg",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
{
    id: 2,
    name: "Зарядка 1",
    previewImageSrc: "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 600,
    inventory: WorkoutInventory.NONE,
    area: WorkoutArea.CORE,
    difficulty: WorkoutDifficulty.BEGINNER,
    exercises: [
        {
            imageSrc: "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        }
    ]
},
{
    id: 3,
    name: "Тренировка 2",
    previewImageSrc: "https://st.focusedcollection.com/14026668/i/650/focused_268295064-stock-photo-man-doing-barbell-exercise-gym.jpg",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 450,
    inventory: WorkoutInventory.GYM,
    area: WorkoutArea.ARMS,
    difficulty: WorkoutDifficulty.INTERMEDIATE,
    exercises: [
        {
            imageSrc: "https://st.focusedcollection.com/14026668/i/650/focused_268295064-stock-photo-man-doing-barbell-exercise-gym.jpg",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://st.focusedcollection.com/14026668/i/650/focused_268295064-stock-photo-man-doing-barbell-exercise-gym.jpg",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://st.focusedcollection.com/14026668/i/650/focused_268295064-stock-photo-man-doing-barbell-exercise-gym.jpg",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://st.focusedcollection.com/14026668/i/650/focused_268295064-stock-photo-man-doing-barbell-exercise-gym.jpg",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
{
    id: 4,
    name: "Воркаут 1",
    previewImageSrc: "https://media.istockphoto.com/id/1134840987/photo/woman-practicing-yoga-glute-bridge-exercise-dvi-pada-pithasana-pose.jpg?s=612x612&w=0&k=20&c=-gi08sIqYzbjoWDQ4j9VtxN9JKD6e_ZSAHs0k7XyEM0=",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 900,
    inventory: WorkoutInventory.NONE,
    area: WorkoutArea.LEGS,
    difficulty: WorkoutDifficulty.ADVANCED,
    exercises: [
        {
            imageSrc: "https://media.istockphoto.com/id/1134840987/photo/woman-practicing-yoga-glute-bridge-exercise-dvi-pada-pithasana-pose.jpg?s=612x612&w=0&k=20&c=-gi08sIqYzbjoWDQ4j9VtxN9JKD6e_ZSAHs0k7XyEM0=",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1134840987/photo/woman-practicing-yoga-glute-bridge-exercise-dvi-pada-pithasana-pose.jpg?s=612x612&w=0&k=20&c=-gi08sIqYzbjoWDQ4j9VtxN9JKD6e_ZSAHs0k7XyEM0=",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1134840987/photo/woman-practicing-yoga-glute-bridge-exercise-dvi-pada-pithasana-pose.jpg?s=612x612&w=0&k=20&c=-gi08sIqYzbjoWDQ4j9VtxN9JKD6e_ZSAHs0k7XyEM0=",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1134840987/photo/woman-practicing-yoga-glute-bridge-exercise-dvi-pada-pithasana-pose.jpg?s=612x612&w=0&k=20&c=-gi08sIqYzbjoWDQ4j9VtxN9JKD6e_ZSAHs0k7XyEM0=",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
{
    id: 5,
    name: "Треня 1",
    previewImageSrc: "https://media.istockphoto.com/id/1178523902/photo/young-woman-doing-bicycle-crunch-exercise-pink-background-panorama.jpg?s=612x612&w=0&k=20&c=3XZZMYbaF7HQ1Je49XWHwwoXlR_KHQUJ8od_YQIQrwc=",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 360,
    inventory: WorkoutInventory.BASIC,
    area: WorkoutArea.CORE,
    difficulty: WorkoutDifficulty.BEGINNER,
    exercises: [
        {
            imageSrc: "https://media.istockphoto.com/id/1178523902/photo/young-woman-doing-bicycle-crunch-exercise-pink-background-panorama.jpg?s=612x612&w=0&k=20&c=3XZZMYbaF7HQ1Je49XWHwwoXlR_KHQUJ8od_YQIQrwc=",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1178523902/photo/young-woman-doing-bicycle-crunch-exercise-pink-background-panorama.jpg?s=612x612&w=0&k=20&c=3XZZMYbaF7HQ1Je49XWHwwoXlR_KHQUJ8od_YQIQrwc=",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1178523902/photo/young-woman-doing-bicycle-crunch-exercise-pink-background-panorama.jpg?s=612x612&w=0&k=20&c=3XZZMYbaF7HQ1Je49XWHwwoXlR_KHQUJ8od_YQIQrwc=",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1178523902/photo/young-woman-doing-bicycle-crunch-exercise-pink-background-panorama.jpg?s=612x612&w=0&k=20&c=3XZZMYbaF7HQ1Je49XWHwwoXlR_KHQUJ8od_YQIQrwc=",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
]

export default workoutdata