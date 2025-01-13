'use client';
import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store/store";
import {
    addEducation,
    addExperience,
    addSkills,
    removeEducation,
    removeExperience,
    removeSkills, setName
} from "@/features/resumeSlice";
import FieldList from "@/components/FieldList";
import ResumePreview from "@/components/ResumePreview";
import Link from "next/link";

const Form = () => {

    const {name, education, experience, skills} = useSelector((state: RootState) => state.resume);

    const dispatch: AppDispatch = useDispatch<AppDispatch>();

    const [stateForm, setStateForm] = React.useState({
        education: '',
        experience: '',
        skills: ''
    });

    console.log(name, education, experience, skills)
    const handleChange = (name: string, value: string) => {
        setStateForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleAdd = (name: 'education' | 'experience' | 'skills') => {
        if (!stateForm[name].trim()) return
        switch (name) {
            case 'education':
                dispatch(addEducation(stateForm.education))
                break
            case 'experience':
                dispatch(addExperience(stateForm.experience))
                break
            case 'skills':
                dispatch(addSkills(stateForm.skills))
                break
        }
        setStateForm((prev) => ({...prev, [name]: ''}))
    }

    const handleRemove = (name: 'education' | 'experience' | 'skills', index: number) => {
        switch (name) {
            case 'education':
                dispatch(removeEducation(index))
                break
            case 'experience':
                dispatch(removeExperience(index))
                break
            case 'skills':
                dispatch(removeSkills(index))
                break
        }

    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value))
    }

    return (
        <div>
            <div onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" value={name} onChange={handleChangeName}/>
                </div>
                <FieldList
                    title="experience" items={experience} inpVal={stateForm.experience}
                    onInpChange={(value: string) => handleChange('experience', value)}
                    onAdd={() => handleAdd('experience')}
                    onRemove={(index:number) => handleRemove('experience', index)}
                />
                <FieldList
                    title="education" items={education} inpVal={stateForm.education}
                    onInpChange={(value: string) => handleChange('education', value)}
                    onAdd={() => handleAdd('education')}
                    onRemove={(index:number) => handleRemove('education', index)}
                />
                <FieldList
                    title="skills" items={skills} inpVal={stateForm.skills}
                    onInpChange={(value: string) => handleChange('skills', value)}
                    onAdd={() => handleAdd('skills')}
                    onRemove={(index:number) => handleRemove('skills', index)}
                />
            </div>

            <div>
                <h1> Preview</h1>

                <ResumePreview/>

                <Link href="/preview" >preview</Link>
            </div>

        </div>
    );
};

export default Form;