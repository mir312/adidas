import './Button.css'

function Button(props){
    return(
        <button className ="btn" data-number={props.number}>{props.text}</button>
    )
}

export default Button