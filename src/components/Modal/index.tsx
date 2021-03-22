import { ReactNode } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}

// class Modal extends Component {
//   constructor(props) {
//     super(props);
//   const { isOpen } = this.props;
//   this.state = {
//     modalStatus: isOpen
//   }
// }

// componentDidUpdate(prevProps) {
//   const { isOpen } = this.props;
//   console.log('Modal.componentDidUpdate');

//   if (prevProps.isOpen !== isOpen) {
//     console.log(this.props)
//     this.setState({ modalStatus: isOpen })
//   }
// }
// render() {

function Modal(props: ModalProps) {
  // const { modalStatus } = this.state;

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={props.setIsOpen}
      isOpen={props.isOpen}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {props.children}
    </ReactModal>
  );
}

export default Modal;
