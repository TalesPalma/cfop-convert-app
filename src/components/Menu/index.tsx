import './Menu.css'


const Menu = (props: { changeList: () => void, onChangeForm: () => void }) => {
    return (

        <div className='menu-container'>
            <button onClick={props.onChangeForm} type="button">
                Conversor
            </button>
            <button onClick={props.changeList} type="button">
                Lista cfops quê trabalhamos
            </button>
        </div>
    );
};

export default Menu;