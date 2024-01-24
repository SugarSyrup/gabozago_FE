import PageTemplate from "../components/common/PageTemplate";
import useSearchInput from "../hooks/useSearchInput";
import useModal from "../hooks/useModal";

function SchedulePage() {
  const [, SearchInput] = useSearchInput({});
  const { Modal, modalOpen } = useModal({
    title: "제목입력",
  });
  
  return (
      <PageTemplate nav={true} header={false}>
        <Modal>
          <div>TEST</div>
        </Modal>
        <SearchInput />
        여행 일정 페이지
        <button onClick={modalOpen}>모달 open</button>
      </PageTemplate>
  );
}

export default SchedulePage;
