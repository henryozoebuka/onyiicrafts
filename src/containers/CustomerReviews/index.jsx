import React, { useState } from 'react'
import './customer-reviews.css'
import CustomerReview from '../../components/CustomerReview'
import { useSwipeable } from 'react-swipeable';

const CustomerReviews = ({ image }) => {

    const [reviewCount, setReviewCount] = useState(0)

    const nextSlide = () => {
        if (reviewCount <= customerReviews.length - 2) {
            setReviewCount(prevCount => prevCount + 1)
        } else {
            setReviewCount(0)
        }
    }

    const previousSlide = () => {
        if (reviewCount > 0) {
            setReviewCount(prevCount => prevCount - 1)
        } else {
            setReviewCount(prevCount => prevCount = customerReviews.length - 1)
        }
    }



    const customerReviews = [
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover0' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed.', role: 'Manager1' },
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover2' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed.', role: 'Manager3' },
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover4' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed.', role: 'Manager5' },
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover6' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed.', role: 'Manager7' },
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover8' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed.', role: 'Manager9' },
        { customerName: 'Henry Onyeka', title: 'Best Quality', description: 'The guys are always keen to share their knowledge and their designs are always changing. Wonderful craft pieces!', role: 'Crafts Lover10' },
        { customerName: 'Okey Jazz', title: 'Great organization', description: 'Wow! That was quick. I received my order faster than I anticipated. Anyway - well done indeed. I am really impressed1.', role: 'Manager11' }

    ]

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => previousSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true // Allow mouse swipe as well
    });

    return (
        <div className='customer-reviews'>
            <div className='customer-reviews-image-div'>
                <img src={image} alt={'A word from our customers'} />
            </div>

            <div className='customer-reviews-contents-main'>
                <div className='customer-reviews-texts'>
                    <div>
                        <p className='customer-reviews-texts-p'>A Word From Our Customers</p>
                    </div>
                    <div className='customer-reviews-lower-contents'>
                        <div className='less-than' onClick={previousSlide}>
                            <a href='#left'>&lt;</a>
                        </div>
                        <div className='customer-reviews-contents' {...handlers}>
                            <div className='test' style={{ display: 'flex', width: '100%', transform: `translateX(-${reviewCount * 100}%)` }}>
                                {customerReviews && customerReviews.map((review, index) => (

                                    <CustomerReview key={index} title={review.title} description={review.description} customerName={review.customerName} role={review.role} />

                                ))}
                            </div>
                        </div>
                        <div className='greater-than' onClick={nextSlide}><a href='#right'>&gt;</a></div>
                    </div>
                    <div >
                            <div className='slide-indicator' >
                                {customerReviews && customerReviews.map((dot, index) => (
                                    <div key={index} className='dotted' style={{ backgroundColor: reviewCount === index && '#cb9565' }}></div>
                                ))}
                            </div>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default CustomerReviews