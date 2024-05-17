import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = (props) => {
    const { id, title, imageUrl, route } = props.category;
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate(route);
    return(
        <div key={id} onClick={onNavigateHandler} className='directory-item-container'>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`, alt: `${{title}}`}}>
            </div>
            <div className='body'>
                <h2>{title}</h2>
                <p>{'Shop Now'}</p>
            </div>
        </div>
    )
}

export default DirectoryItem;