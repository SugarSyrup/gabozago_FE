import PageTemplate from '../components/common/PageTemplate'
import useSearchInput from '../hooks/useSearchInput'
import useModal from '../hooks/useModal'
import usePopup from '../hooks/usePopup'
import Comment from '../components/journal/Comment'
import FilterList from '../components/common/FilterList'

function TestPage() {
  const [, SearchInput] = useSearchInput({
    backgroundColor: 'white',
    borderColor: '#ADADAD',
  })
  const { Modal, modalOpen } = useModal({
    title: '',
    handle: false,
    borderRadius: '16px',
  })
  const { Popup, popupOpen } = usePopup()

  return (
    <PageTemplate nav>
      <Modal>
        <Comment commentInputPosition="bottom" />
      </Modal>
      <Popup padding="30px 40px">신고가 접수되었습니다.</Popup>
      <SearchInput />
      <button onClick={modalOpen}>모달 open</button>
      <button onClick={popupOpen}>팝업 open</button>
      {/* <Comment /> */}
      <FilterList
        filters={['sort', 'location', 'theme', 'budget', 'duration']}
      />
    </PageTemplate>
  )
}

export default TestPage
