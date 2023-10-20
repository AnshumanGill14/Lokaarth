import React from 'react'
import "./SyncCustomers.css"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"


const gridData = [

    {
        photo: icon1,
        heading: 'Voter Registration and Verification',
        info: "Lokarth enables citizens to register as voters and verify their eligibility to participate in the democratic process."
    },
    {
        photo: icon2,
        heading: 'Grievance Management',
        info: "A platform for citizens to report grievances and issues, which will be routed to the appropriate representatives for resolution."
    },
    {
        photo: icon3,
        heading: 'Political Matchmaking',
        info: "Lokarth matches citizens with political parties and candidates whose platforms align with their values and beliefs."
    },
    {
        photo: icon4,
        heading: 'Polling Campaign',
        info: "Facilitate creating and managing political polling campaigns, allowing citizens to participate and view campaign progress."
    },
    {
        photo: icon5,
        heading: 'Membership Insights',
        info: "Gain a deep understanding of platform members and their political affiliations. Analyze user engagement and facilitate formal party affiliations to empower a more informed and engaged citizenry."
    },
    {
        photo: icon6,
        heading: 'Survey Integration',
        info: "Users can participate in surveys, and the results can be analyzed to provide valuable insights and inform decision-making processes."
    },
    {
        photo: icon2,
        heading: 'Integrated Analytics Center',
        info: "A central platform to unify data analysis, report management, and user engagement tracking, fostering data-driven decision-making for a well-informed and responsive democracy."
    },
    {
        photo: icon3,
        heading: 'Stakeholder & Volunteer Unity',
        info: "Facilitate active participation and unity among citizens, political parties, and elected representatives while managing and assigning volunteers to polling booths and voting locations on election day."
    },

]

const SyncCustomers = () => {
    return (
        <div className='comp6'>
            <div className='mainContainer1'>
                <div className='h6_1'>
                    <p>Lokarth Feature Highlights</p>
                </div>
                <div className='h6_4'>
                    <p>Our Robust Offerings to Strengthen and Empower Democracy</p>
                </div>
                <div className='h6_2_outer'>
                <div className='h6_2'>
                    <p>Lokarth brings you a dynamic array of features meticulously designed to empower citizens, connect political parties with their constituents, and enable elected representatives to fulfil their promises.</p>
                </div>
                </div>

                <div className='gridOuter'>

                <div className='grid'>
                    {!!gridData && gridData?.map((grid, index) => {
                        return (
                            <>
                                <div className='box6'>
                                    <div className='icon'>
                                        <img src={grid?.photo} alt='iconimage' />
                                    </div>
                                    <div className='h6_3'>
                                        <p className={grid.heading.length>27 ? "exception":"normal"}>{grid?.heading}</p>
                                    </div>
                                    <div className='txt6'>
                                        <p>{grid?.info}</p>
                                    </div>
                                </div>
                            </>

                        )
                    })

                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default SyncCustomers
 

 