import { Toaster as DefaultToaster, ToastBar, ToasterProps } from 'react-hot-toast';

export interface Props extends ToasterProps {}

export default function Toaster({ ...props }: Props) {
  const { position, toastOptions, reverseOrder, gutter, containerStyle, containerClassName } =
    props;

  return (
    <DefaultToaster
      position={position}
      toastOptions={{
        ...toastOptions,
      }}
      reverseOrder={reverseOrder}
      gutter={gutter}
      containerStyle={{ ...containerStyle }}
      containerClassName={containerClassName}
    >
      {(t) => (
        <ToastBar toast={t} style={{ padding: 0 }}>
          {({ message }) => <>{message}</>}
        </ToastBar>
      )}
    </DefaultToaster>
  );
}
