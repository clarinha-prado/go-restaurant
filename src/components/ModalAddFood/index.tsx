import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FoodItem } from '../../types';


// class ModalAddFood extends Component {
//   constructor(props) {
//     super(props);

//     this.formRef = createRef();
//   }

interface ModalAddProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: FoodItem) => void;
}

function ModalAddFood(props: ModalAddProps) {
  const { setIsOpen, handleAddFood, isOpen } = props;

  const handleSubmit = async (data: FoodItem) => {

    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
