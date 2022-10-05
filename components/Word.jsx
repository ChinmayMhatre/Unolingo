import React from "react";

function Word({ text, hint }) {
    return (
        <div className="word underline font-medium text-xl hover:text-gray-600 tracking-wide underline-offset-8 decoration-dotted group cursor-pointer select-none  decoration-gray-600">
            
                <p>
                {text}{" "}
                    <span class='tooltip-text text-lg bg-whit border-[#58cc02] border-solid border-2 p-3 -mt-20 transition-all -ml-6 rounded hidden group-hover:block absolute text-center py-2 px-6 z-50"'>
                        {hint}
                    </span>
                </p>
        </div>
    );
}

export default Word;
