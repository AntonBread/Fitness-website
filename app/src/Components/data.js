// PLACEHOLDER WORKOUT DATA FILE

import { WorkoutInventory, WorkoutArea, WorkoutDifficulty } from "../Scripts/workoutFilterData"

export const APIBase = "https://26ab-109-123-186-31.eu.ngrok.io/"

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
{
    id: 6,
    name: "10 минут ВИТ: третья тренировка ВИТ",
    previewImageSrc: "https://media.istockphoto.com/id/1288737452/photo/you-are-strong-strong-is-you.jpg?s=612x612&w=0&k=20&c=KBa7d-_SK2NOPIi8U82atJykQBCuzqjVFXF_2ydHdUQ=",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 660,
    inventory: WorkoutInventory.GYM,
    area: WorkoutArea.ARMS,
    difficulty: WorkoutDifficulty.BEGINNER,
    exercises: [
        {
            imageSrc: "https://media.istockphoto.com/id/1288737452/photo/you-are-strong-strong-is-you.jpg?s=612x612&w=0&k=20&c=KBa7d-_SK2NOPIi8U82atJykQBCuzqjVFXF_2ydHdUQ=",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1288737452/photo/you-are-strong-strong-is-you.jpg?s=612x612&w=0&k=20&c=KBa7d-_SK2NOPIi8U82atJykQBCuzqjVFXF_2ydHdUQ=",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1288737452/photo/you-are-strong-strong-is-you.jpg?s=612x612&w=0&k=20&c=KBa7d-_SK2NOPIi8U82atJykQBCuzqjVFXF_2ydHdUQ=",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://media.istockphoto.com/id/1288737452/photo/you-are-strong-strong-is-you.jpg?s=612x612&w=0&k=20&c=KBa7d-_SK2NOPIi8U82atJykQBCuzqjVFXF_2ydHdUQ=",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
{
    id: 7,
    name: "5 мин. йоги для бегунов: растяжка для разогрева",
    previewImageSrc: "https://marathonec.ru/wp-content/uploads/2021/05/anjaneyasana.jpg",
    video: "https://www.youtube.com/embed/TDvNBQ7ysUo",
    duration: 360,
    inventory: WorkoutInventory.NONE,
    area: WorkoutArea.CORE,
    difficulty: WorkoutDifficulty.BEGINNER,
    exercises: [
        {
            imageSrc: "https://marathonec.ru/wp-content/uploads/2021/05/anjaneyasana.jpg",
            name: "Скручивания с подъёмом колен",
            area: "Прямая мышца",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://marathonec.ru/wp-content/uploads/2021/05/anjaneyasana.jpg",
            name: "Скрёстные касания прямых ног",
            area: "Косые, межрёберные и зубчатые мыщцы",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://marathonec.ru/wp-content/uploads/2021/05/anjaneyasana.jpg",
            name: "Перекаты на полу",
            area: "Прямая и поперечная мышщы живота, косые пучки",
            repCount: "3x15 раз",
        },

        {
            imageSrc: "https://marathonec.ru/wp-content/uploads/2021/05/anjaneyasana.jpg",
            name: "Велосипед с поднятым корпусом",
            area: "Прямая, внутренняя и наружная косая мыщцы",
            repCount: "3x15 раз",
        }
    ]
},
]

export default workoutdata

export const recommendedLinks = [{
    id: 1,
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    name: "Практика на самые глубокие мыщцы кора",
    description: "Лорел Пру, физиотерапевт, доктор медицинских наук",
    previewImageSrc: "https://www.oum.ru/upload/iblock/0ad/0adb02d72324cc3c1f7f80ba03db4db5.jpg"
},
{
    id: 2,
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    name: "Паста с кудрявой капустой",
    description: "30 мин.",
    previewImageSrc: "https://img.inmyroom.ru/inmyroom/thumb/620x398/jpg:85/uploads/food_recipe/teaser/c1/c142/jpg_1000_c1428513-6167-43c1-abac-f19e60a73b90.jpg?sign=ebc8d7d4f48b089b8c9160c192ded67acdd5903114b0b6f138733a00a9d1e906"
},
{
    id: 3,
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    name: "Найди свой оптимальный вариант восстановления",
    description: "Советы",
    previewImageSrc: "https://img.championat.com/c/1200x900/news/big/r/l/chto-takoe-vosstanovitelnye-trenirovki_1601474901346592870.jpg"
}
]

export const statGraphData = [{
    dateTime: "2023-02-25",
    weight: "80",
    bustSize: "100",
    waistSize: "80",
    hipsSize: "110",
    singleHipSize: "60"
},
{
    dateTime: "2023-03-15",
    weight: "78",
    bustSize: "99",
    waistSize: "78",
    hipsSize: "105",
    singleHipSize: "60"
},
{
    dateTime: "2023-04-10",
    weight: "72",
    bustSize: "95",
    waistSize: "75",
    hipsSize: "100",
    singleHipSize: "60"
},
{
    dateTime: "2023-04-20",
    weight: "69",
    bustSize: "92",
    waistSize: "72",
    hipsSize: "96",
    singleHipSize: "50"
},
{
    dateTime: "2023-05-01",
    weight: "64",
    bustSize: "92",
    waistSize: "65",
    hipsSize: "95",
    singleHipSize: "40"
},
{
    dateTime: "2023-05-15",
    weight: "62",
    bustSize: "91",
    waistSize: "62",
    hipsSize: "92",
    singleHipSize: "42"
},
{
    dateTime: "2023-05-30",
    weight: "60",
    bustSize: "90",
    waistSize: "60",
    hipsSize: "90",
    singleHipSize: "40"
}]

export const homeImages = [
    "https://avatars.dzeninfra.ru/get-zen_doc/1107063/pub_5d234d8ffe516300ade0caed_5d258e27cfcc8600ada5cb50/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/3765046/pub_5f34e4af3fcec9284b9e3f5e_5f34e6ad7f79eb09ffabd833/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/1107063/pub_5d234d8ffe516300ade0caed_5d258e27cfcc8600ada5cb50/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/3765046/pub_5f34e4af3fcec9284b9e3f5e_5f34e6ad7f79eb09ffabd833/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/1107063/pub_5d234d8ffe516300ade0caed_5d258e27cfcc8600ada5cb50/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/3765046/pub_5f34e4af3fcec9284b9e3f5e_5f34e6ad7f79eb09ffabd833/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/1107063/pub_5d234d8ffe516300ade0caed_5d258e27cfcc8600ada5cb50/scale_1200",
    "https://avatars.dzeninfra.ru/get-zen_doc/3765046/pub_5f34e4af3fcec9284b9e3f5e_5f34e6ad7f79eb09ffabd833/scale_1200"
]
