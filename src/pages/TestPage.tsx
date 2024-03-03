import PageTemplate from "../components/common/PageTemplate";
import useSearchInput from "../hooks/useSearchInput";
import useModal from "../hooks/useModal";
import usePopup from "../hooks/usePopup";

function TestPage() {
  const [, SearchInput] = useSearchInput({
    backgroundColor:"white",
    borderColor:"#ADADAD"
  });
  const { Modal, modalOpen } = useModal({
    title: "제목입력",
  });
  const { Popup, popupOpen } = usePopup();

  return (
    <PageTemplate nav={true} header={false}>
      <Modal>
        <div>TEST</div>
      </Modal>
      <Popup padding="30px 40px">신고가 접수되었습니다.</Popup>
      <SearchInput />
      여행 일정 페이지
      <button onClick={modalOpen}>모달 open</button>
      <button onClick={popupOpen}>팝업 open</button>
    </PageTemplate>
  );
}

export default TestPage;
