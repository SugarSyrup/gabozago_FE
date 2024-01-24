import PageTemplate from "../components/common/PageTemplate";
import useModal from "../hooks/useModal";

function SchedulePage() {
  const { Modal, modalOpen } = useModal({
    title: "제목입력",
  });
  return (
    <>
      <PageTemplate nav={true} header={false}>
        <Modal>
          <div>TEST</div>
        </Modal>
        <button onClick={modalOpen}>모달 open</button>
      </PageTemplate>
    </>
  );
}

export default SchedulePage;
