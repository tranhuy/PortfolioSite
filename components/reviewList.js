const ReviewItem = ({ review }) => {
     return (
         <div>
             <p className='font-semibold text-lg mb-5'>{review.Author}</p>            
             <p>{review.Review}</p><br/>
             <p className='italic'>{review.CreationTime}</p>
         </div>
     )
}

const ReviewList = ({ reviews }) => {
    return (
        <>
            {reviews.map((review, index) => {
                return (
                    <div key={index} className='p-4 shadow-lg rounded-lg bg-gray-100 text-gray-700'>
                        <ReviewItem review={review} />
                        <hr className='my-2 border-gray-300' />
                    </div>
                )
            })}   
        </>
    )
}

export default ReviewList