'use client'
import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import { jsPDF } from "jspdf";

const ResumePreview = () => {
    const {name,experience,education,skills } = useSelector((state: RootState) => state.resume);

const handlePDF = ()   => {
    const doc = new jsPDF();
    doc.text(`Name: ${name}`, 10, 10);
    doc.text(`Experience: `, 10, 40);
    experience.forEach((item, index) => {
        doc.text(`${index+1}. ${item}`, 10, 30 + index * 10);
    })
    doc.text(`Education`, 10, 40 + experience.length * 10)
    education.forEach((item, index) => {
        doc.text(`${index + 1}. ${item}`, 10, 50 + experience.length * 10 + index * 10)
    })
    doc.save('resume.pdf')

}
    return (
        <div>
            <div className="border-t-2 border-b-2 border-b-amber-900" >
                <h2 className='font' >Name</h2>
                <div>{name}</div>
            </div>

            <h2>experience</h2>
            {experience.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <h2>education</h2>
            <div className="border-2 border-black" >

            { education.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            </div>
            <h2>skills</h2>
            { skills.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <button onClick={handlePDF}>save</button>
        </div>
    );
};

export default ResumePreview;