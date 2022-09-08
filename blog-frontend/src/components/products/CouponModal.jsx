import AskModal from "../common/SizeModal";

const CouponModal = ({ visible, onConfirm, onCancel}) => {
    return (
        <AskModal
        visible={visible}
        title="쿠폰 가이드"
        description="/assets/coupon.gif"
        confirmText="닫기"
        onConfirm={onConfirm}
        onCancel={onCancel}
        />
    );
};

export default CouponModal;