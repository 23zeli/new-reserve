import React from 'react'

export default function () {
  return (
        <div
            id='menu'
            className='specials'
            style={{
                width: "860px",
                height: "824px",
                margin: "auto",
            }}
        >
            <div className="flex-container">
                <div className="hero-header">
                    <h1>This weeks Specials!</h1>
                    <button>Online Menu</button>
                </div>
                <div className="hero-section-container">
                    <div className=" card greek-salad">
                        <img
                            src="./images/greek salad.jpg"
                            alt="greek_salad"
                        />
                        <h3>Greek salad</h3>
                        <p>
                            The famous Greek salad of crispy lettuce, peppers, olives and our              Chicago style  feta cheese garnished with crunchy garlic...
                        </p>
                        <p>Order a delivery</p>
                    </div>
                    <div className='card bruchetta'>
                        <img
                            src="./images/bruchetta.png"
                            alt="bruchetta"
                        />
                        <h3>Bruchetta</h3>
                        <p>
                            Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <p>Order a delivery</p>
                    </div>
                    <div className='card lemon-dessert'>
                        <img
                            src="./images/lemon dessert.jpg"
                            alt="lemon_dessert"
                        />
                        <h3>Lemon Desert</h3>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is authentic as can be imagined.
                        </p>
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
