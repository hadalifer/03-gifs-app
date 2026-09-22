interface Props {
    title?: string;
    list: string[];
    onClick: (term: string) => void;
}
export const CustomPreviousSerches = ({
    title = "Busquedas previas", list, onClick }: Props) => {
    return (
        <div className='previous-searches'>
            <h2>{title}</h2>
            <ul className='previous-searches-list'>
                {list.map((term) => (
                    <li key={term}
                        onClick={() => onClick(term)}>{term}</li>
                ))}
            </ul>
        </div>
    )
}