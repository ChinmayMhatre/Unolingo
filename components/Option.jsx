import React from "react";

function Option({item,provided}) {
    return (
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="bg-white shadow-lg py-2 px-4 rounded-lg"
            style={{
                userSelect: "none",
                ...provided.draggableProps.style,
            }}
        >
            {item.content}
        </div>
    );
}

export default Option;
