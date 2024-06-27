import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ShareTargetPage() {
  const { title, text } = useParams();
  const [paramsData, setParamsData] = useState({ title: '', text: '', url: '' });
  const [locationsData, setLocationsData] = useState({ title: '', text: '', url: '' });

  const location = useLocation();

  useEffect(() => {
    const handleShare = async () => {
      if (location.pathname === '/share-target') {
        const formData = new FormData(location.state as HTMLFormElement);
        setLocationsData({
          title: formData.get('title') as string,
          text: formData.get('text') as string,
          url: formData.get('url') as string,
        });
        // const file = formData.get('file') as File;

        // 공유 데이터 처리
        // console.log('Title:', title);
        // console.log('Text:', text);
        // console.log('URL:', url);
        // if (file) {
        //   console.log('File:', file.name);
        // }
      }
    };

    handleShare();
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParamsTitle = params.get('title');
    const searchParamsText = params.get('text');
    const searchParamsURL = params.get('url');
    console.log('GET URLSearchParams');
    console.log({ searchParamsTitle, searchParamsText });
    setParamsData({
      title: searchParamsTitle as string,
      text: searchParamsText as string,
      url: searchParamsURL as string,
    });

    console.log('GET useParams');
    console.log({ title, text });
  }, []);

  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: 'rebeccapurple',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        padding: '20px',
        color: 'white',
      }}
    >
      <h1>Share Target</h1>
      <p>Share target page</p>

      <h1>GET URLSearchParams</h1>
      <p>title : {paramsData.title}</p>
      <p>text : {paramsData.text}</p>
      <p>url : {paramsData.url}</p>

      <h1>useLocation</h1>
      <p>title : {locationsData.title}</p>
      <p>text : {locationsData.text}</p>
      <p>url : {locationsData.url}</p>

      <h1>useParams</h1>
      <p>title : {title}</p>
      <p>text : {text}</p>
    </div>
  );
}

export default ShareTargetPage;
