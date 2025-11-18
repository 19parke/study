
export default function Chip(props){
    const styles = {
        backgroundColor: props.backColor,
        color: props.color
    }
    return (
        <span style={styles} className={props.className}>
            {props.name}
        </span>
    )
}

/*
    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span 
                className="chip" 
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

*/