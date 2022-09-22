import Input from "components/Input/Input";

function initRadioButtons() {
    const items = [
        'Apple',
        'Bananas',
        'Grapefruit',
        'Orange',
        'Peach',
        'Pear',
    ]

    return items;
}
const RadioButtons = () => {
    const buttons = initRadioButtons()

    return (
        <div className="radio-buttons">
            {buttons.map((item, index) => {
                return <Input key={index} input_id={item.toLowerCase()} label={item} reverse={true} type="radio" name="fruit" className="radio-button"/>
            })}
        </div>
    )
};

export default RadioButtons;
