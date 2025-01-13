import React from 'react';

interface FieldListProps {
    title: string;
    items: string[];
    inpVal: string;
    onInpChange: (value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
}

const FieldList = ({title, items, inpVal, onInpChange, onAdd, onRemove}: FieldListProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <input value={inpVal} onChange={(e) => onInpChange(e.target.value)} type="text" placeholder="" className="bg-gray-200" />
            <button onClick={onAdd} type="submit">Add</button>
            <ul>
                {items.map((item, index) => (
                    <div key={index}>
                        <span  >{item}</span>
                        <button onClick={() => onRemove(index)}>del</button>

                    </div>
                ))}
            </ul>
        </div>

    );
};

export default FieldList;