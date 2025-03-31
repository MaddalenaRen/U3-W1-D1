//creo in questo file. jsx una funzione per il bottone da esportare 
//{text} è un prop

function ButtonComponent({ text }) {
    return (
        <button>
            {text}
        </button>
    );
};

export default ButtonComponent;