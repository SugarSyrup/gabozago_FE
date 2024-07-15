import Toast from '.';
import Typography from '../../Typography';

export default function ReportToast() {
  return (
    <Toast>
      <Typography.Body size="lg" color="white">
        신고가 접수되었습니다.
      </Typography.Body>
    </Toast>
  );
}
