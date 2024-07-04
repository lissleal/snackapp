import { Modal, Text, Button } from "react-native";

export const ModalConfirmacion = ({ onHandleModal, modalVisible }) => (
  <Modal
    animationType="slide"
    visible={modalVisible}
    onRequestClose={onHandleModal}
  >
    <Text>Seguro que quieres ingresar?</Text>
    <Button title="ingresar" onPress={onHandleModal} />
  </Modal>
);
