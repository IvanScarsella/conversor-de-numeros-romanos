interface CardProps {
    changeHandler: (e: any) => void // Ajusta el tipo de acuerdo a tus necesidades
    input: number | string
    setInput: (value: any) => void; // Ajusta el tipo de acuerdo a tus necesidades
    getRandomAndSetInput: (input: number | string, setInput: (value: number | string) => void) => void;
    roman: number | string;
    type: string,
    title: string,
    input1: string,
    input2: string
};

export function Card({
    changeHandler,
    input,
    setInput,
    getRandomAndSetInput,
    roman,
    type,
    title,
    input1,
    input2
}: CardProps) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card w-75 mb-3">
                        <div className="card-body">
                            <h1 className="card-title fs-1">{title}</h1>
                            <div className="form-group">
                                <span className="input-group-text font-weight-bold fs-3" id="basic-addon1">{input1}</span>
                                <input
                                    className="form-control font-weight-bold fs-3"
                                    onChange={changeHandler}
                                    placeholder="Coloque aquí un número decimal"
                                    value={input}
                                    min="1"
                                    max="1000000"
                                    type={type}
                                    id="input"
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => getRandomAndSetInput(input, setInput)}>
                                    Aleatorio
                                </button>
                            </div>
                            <div>
                                <span className="input-group-text fs-3" id="basic-addon1">{input2}</span>
                                <span className="input-group-text fs-3" id="basic-addon1">{roman}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;