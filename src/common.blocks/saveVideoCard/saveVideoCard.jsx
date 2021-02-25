import './saveVideoCard.css';
import SearchBar from '../searchBar/SearchBar';
import VideoList from '../videoList/VideoList'




const SaveVideoCard = (props) => {

    return (
        <div className="saveCardContainer">
          <form className="saveCardContainer__form">
            <h1 className="saveCardContainer__form__title">Сохранить запрос</h1>
            <div className="saveCardContainer__form__inputs">
            <div className="saveCardContainer__form__input-form">
              <label htmlFor="request" className="saveCardContainer__form__input-form__label">Запрос</label>
              <input 
              className="saveCardContainer__form__input-form__input"
              type="text"
              disabled="disabled"/>
            </div>
            <div className="saveCardContainer__form__input-form">
              <label htmlFor="title" className="saveCardContainer__form__input-form__label">Название</label>
              <input 
              className="saveCardContainer__form__input-form__input"
              placeholder="Укажите название"
              type="text"/>
            </div>
            <div className="saveCardContainer__form__input-form">
              <label htmlFor="sortBy" className="saveCardContainer__form__input-form__label">Сортировать по</label>
              <input 
              className="saveCardContainer__form__input-form__input"
              placeholder="Без сортировки"
              type="text"/>
            </div>
            </div>
            
            <div className="saveCardContainer__form__btnBlock">
              <button className="saveCardContainer__form__btnBlock__btn"
              onClick={()=>{
                props.history.push('/')
              }}>Не сохранять</button>
              <button className="saveCardContainer__form__btnBlock__btn"
              onClick={()=>{
                props.history.push('/')
              }}
              >Сохранять</button>
            </div>
          </form>
        </div>
    
        
      );
  }

export default SaveVideoCard;


