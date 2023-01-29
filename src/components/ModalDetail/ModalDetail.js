import { useSelector } from 'react-redux';

function ModalDetail() {
    const course = useSelector((state) => state.modal?.courses);

    return (
        <div
            className="modal fade bd-example-modal-xl"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <p>
                        Chỉ là thằng thợ diễn thôi Mà đòi giở giọng bố đời - mẹ dân Nghiệp nhờ khán giả nuôi thân Đến
                        khi thành đạt tụt quần chổng mông Trên đầu chắc chỉ toàn lông
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ModalDetail;
