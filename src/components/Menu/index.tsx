import './Menu.css'


const Menu = (props: { changeList: () => void, onChangeForm: () => void, isSelected: Boolean }) => {
    return (
        <div className='menu-container'>
            <button onClick={props.onChangeForm} type="button" style={{
                backgroundColor: props.isSelected ? '#4158D0' : '#fff',
                backgroundImage: props.isSelected ? 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' : 'none'
            }}>
                Conversor
            </button>
            <button onClick={props.changeList} type="button" style={{
                backgroundColor: !props.isSelected ? '#4158D0' : '#fff',
                backgroundImage: !props.isSelected ? 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' : 'none'
            }}>
                Contato
            </button>
        </div>
    );
};

export default Menu;
