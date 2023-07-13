import './Preview.css';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Preview = (props) => {
    const { contactDetails, experiences, educations } = props.state;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Print Resume",
        pageStyle: "print"
    });    

    return (
        <section className="preview-container">
            <h2 className='preview-title'>Preview</h2>
            <div 
                className='output-preview'
                ref={componentRef}
            >
                <section className='preview-contact-container'>
                    <div className='preview-contact-details'>
                        <p className='firstName'>{contactDetails.firstName}</p>
                        <p className='lastName'>{contactDetails.lastName}</p>
                        <p className='title'>{contactDetails.title}</p>
                        <p className='address'>{contactDetails.address}</p>
                        <p className='phoneNumber'>{contactDetails.phoneNumber}</p>
                        <p className='email'>{contactDetails.email}</p>
                    </div>
                </section>
                <section className='preview-experience-container'>
                    <h2 className='preview-experience-title'>Experience</h2>
                    {experiences.map((exp, index) => 
                        <div className='preview-experience-details' key={index}>
                            <p className='position'>{exp.position}</p>
                            <p className='experienceCompany'>{exp.company}</p>
                            <p className='experienceLocation'>{exp.experienceLocation}</p>
                            <div className='experienceDate'>
                                <p className='experienceFrom'>{exp.experienceFrom}—</p>
                                <p className='experienceTo'>{exp.experienceTo}</p>
                            </div>
                        </div>
                    )}
                </section>
                <section className='preview-education-container'>
                    <h2 className='preview-education-title'>Education</h2>
                    {educations.map((exp, index) => 
                        <div className='preview-education-details' key={index}>
                            <p className='educationInstitution'>{exp.institution}</p>
                            <p className='fieldOfStudy'>{exp.fieldOfStudy}</p>
                            <p className='educationLocation'>{exp.educationLocation}</p>
                            <div className='educationDate'>
                                <p className='educationFrom'>{exp.educationFrom}—</p>
                                <p className='educationTo'>{exp.educationTo}</p>
                            </div>
                        </div>
                    )}
                </section>
            </div>
            <button className='print-btn' onClick={handlePrint}>Print</button>
        </section>
    );
};

export default Preview;