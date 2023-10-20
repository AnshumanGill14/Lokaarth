import React from 'react'
import "./WorkFlowChart.css"
import flowLine from "../../assets/Vector 9.png"


const WorkData = [
    {
        heading: 'Transparency',
        information: "Lokarth is committed to fostering transparency in the political process. It values open and accessible information, ensuring citizens have a clear view of political activities, policies, and decision-making."
    },
    {
        heading: 'Empowerment',
        information: 'Lokarth seeks to empower citizens, political parties, and elected representatives. It values the empowerment of individuals to voice their concerns, make informed decisions, and actively participate in the democratic process.'
    },
    {
        heading: 'Inclusivity',
        information: 'Lokarth believes in inclusivity, ensuring every eligible citizen can register, vote, and engage in the political landscape. It values the diversity of perspectives and voices.'
    },
    {
        heading: 'Collaboration',
        information: 'Lokarth encourages collaboration between citizens, political parties, and elected representatives. It values working together to address challenges, find solutions, and build a stronger democracy.'
    },
];

const WorkFlowChart = () => {
    return (
        <div className='comp_4'>
            <div className='total'>

                <div className='head1'>
                    <p>Our Core Values</p>
                </div>
                <div className='head3'>
                    <p>Our Guiding Principles and Pillars of Commitment</p>
                </div>
                <div className='head2'>
                    <p>Lokarth holds a steadfast dedication to the pursuit of democratic excellence, and our unwavering commitment is firmly rooted in a comprehensive set of core values that unequivocally define and underpin our mission. These core values are not merely statements, but the guiding principles that infuse life and purpose into our digital platform.</p>
                </div>

                <div className='flow'>
                    {
                        !!WorkData && WorkData?.map((work, index) => {
                            return (
                                <>
                                    <div className='box' key={index}>
                                        <div className='boxh1'>
                                            <p>{work?.heading}</p>
                                        </div>

                                        <div className='boxtxt' >
                                            <p>{work?.information}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
            
        </div>
    )
}

export default WorkFlowChart
