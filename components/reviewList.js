const ReviewItem = ({ review }) => {
     return (
         <div>
             <h4>{review.Author}</h4>
             <p>{review.CreationTime}</p>
             <p>{review.Review}</p>
         </div>
     )
}

const ReviewList = ({ reviews }) => {
    return (
        <>
            {reviews.map((review, index) => {
                return (
                    <div key={index} style={{ width: '100%' }}>
                    <ReviewItem review={review} />
                    <hr />
                    </div>
                )
            })}   
        </>
    )
}

export default ReviewList