import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onDragEnd = (result, rows, setRows) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceRow = rows[source.droppableId];
        const destRow = rows[destination.droppableId];
        const sourceItems = [...sourceRow.items];
        const destItems = [...destRow.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setRows({
            ...rows,
            [source.droppableId]: {
                ...sourceRow,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destRow,
                items: destItems,
            },
        });
    } else {
        const row = rows[source.droppableId];
        const copiedItem = [...row.items];
        const [removed] = copiedItem.splice(source.index, 1);
        copiedItem.splice(destination.index, 0, removed);
        setRows({
            ...rows,
            [source.droppableId]: {
                ...row,
                items: copiedItem,
            },
        });
    }
};

const handleSubmit = (rows,setRows,items) => {
    const answer = "I speak Spanish";
    const res = rows.Answer.items.map((item) => item.content).join(" ");
    console.log(res);
    if (res == answer) {
        toast.success('Well done! That is the correct answer', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setRows({
            Question: {
                items: items,
            },
            Answer: {
                items: [],
            },
        });
    }else{
        toast.error('Oops! That is the wrong answer', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        setRows({
            Question: {
                items: items,
            },
            Answer: {
                items: [],
            },
        });
    }
};


const services = {
    onDragEnd,
    handleSubmit
}

export default services;