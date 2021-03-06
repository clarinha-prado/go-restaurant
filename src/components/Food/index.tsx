import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
import api from '../../services/api';
import { FoodItem } from '../../types';


interface FoodProps {
  food: FoodItem;
  handleEditFood: (food: FoodItem) => void;
  handleDelete: (id: number) => void;
}

function Food(props: FoodProps) {

  const food = props.food;
  const [isAvailable, setIsAvailable] = useState(food.available);
  /*   const { available } = props.food;
      this.state = {
        isAvailable: available
      };
    } */

  const toggleAvailable = async () => {
    // const { food } = props;
    //    const { isAvailable } = this.state;

    await api.put(`/foods/${food.id}`, {
      ...food,
      available: !isAvailable,
    });

    setIsAvailable(!isAvailable);
    //    this.setState({ isAvailable: !isAvailable });
  }

  const setEditingFood = () => {
    //    const { food, handleEditFood } = this.props;

    props.handleEditFood(food);
  }

  // render() {
  //   const { isAvailable } = this.state;
  //  const { food, handleDelete } = this.props;
  return (
    <Container available={isAvailable}>
      <header>
        <img src={food.image} alt={food.name} />
      </header>
      <section className="body">
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className="price">
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingFood}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => props.handleDelete(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Dispon??vel' : 'Indispon??vel'}</p>

          <label htmlFor={`available-switch-${food.id}`} className="switch">
            <input
              id={`available-switch-${food.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
  // }
};

export default Food;
