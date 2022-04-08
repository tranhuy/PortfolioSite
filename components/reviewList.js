const ReviewItem = ({ review }) => {
     return (
         <>
             <p className='font-semibold text-lg mb-5'>{review.Author}</p>            
             <p>{review.Review}</p><br/>
             <p className='italic'>{review.CreationTime}</p>
         </>
     )
}

const ReviewList = ({ reviews }) => {
    return (
        <>
            {reviews.map((review, index) => {
                return (
                    <div key={index}>
                        <ReviewItem review={review} />
                        <hr className='my-4 border-gray-300' />
                    </div>
                )
            })}   
        </>
    )
}

export default ReviewList