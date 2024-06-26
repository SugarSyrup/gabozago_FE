import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShareTargetPage() {
  const { title, text } = useParams();
  const [paramsData, setParamsData] = useState({ title: '', text: '' });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchParamsTitle = params.get('title');
    const searchParamsText = params.get('text');
    console.log('GET URLSearchParams');
    console.log({ searchParamsTitle, searchParamsText });
    setParamsData({ title: searchParamsTitle as string, text: searchParamsText as string });

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
      <h1>useParams</h1>
      <p>title : {title}</p>
      <p>text : {text}</p>
    </div>
  );
}

export default ShareTargetPage;
