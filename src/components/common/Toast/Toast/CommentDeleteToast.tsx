import Toast from '.';
import Typography from '../../Typography';

export default function CommentDeleteToast() {
  return (
    <Toast>
      <Typography.Body size="lg" color="white">
        댓글이 삭제되었습니다.
      </Typography.Body>
    </Toast>
  );
}
