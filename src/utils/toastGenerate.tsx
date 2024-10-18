import toast from 'react-hot-toast';

function toastGenerate(ToastMessage: JSX.Element) {
  toast.custom(() => ToastMessage, {
    duration: 1000,
  });
}

export default toastGenerate;
