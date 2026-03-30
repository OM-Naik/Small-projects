import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const params = useParams()
    return (
        <div>
            <h1 className='capitalize text-5xl underline font-bold'>
                {params.courseId} Course Detail Page
            </h1>
        </div>
    )
}

export default CourseDetails