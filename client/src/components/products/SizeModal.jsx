import AskModal from "../common/SizeModal";

const SizeModal = ({ visible, onConfirm, onCancel}) => {
    return (
        <AskModal
        visible={visible}
        title="신발 사이즈 가이드"
        description="/assets/sizeguide.jpg"
        confirmText="닫기"
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    );
};

export default SizeModal;