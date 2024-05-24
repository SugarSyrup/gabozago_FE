// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const isLoginTemplate: React.FC = () => {
//     const history = useHistory();

//     useEffect(() => {
//         const access_token = localStorage.getItem('access_token');

//         if (access_token) {
//             // User is logged in, display the content
//             // Replace the following line with your actual content component
//             return <div>Welcome to the logged-in content!</div>;
//         } else {
//             // User is not logged in, navigate to the login page
//             history.push('/login');
//         }
//     }, [history]);

//     return null; // or you can return a loading spinner or placeholder component
// };

// export default isLoginTemplate;