import { createGlobalStyle } from 'styled-components';

const GlobalFont = createGlobalStyle`	
	@font-face {
		font-family: 'Pretendard';
		font-weight: 900;
		font-display: swap;
		src:local("PretendardWOFF"), url("/Pretendard/Pretendard-Black.woff"), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFExtraBold';
		font-weight: 800;
		font-display: swap;
		src:local("PretendardWOFFExtraBold"), url("/Pretendard/Pretendard-ExtraBold.woff"), format('woff');
	}

	@font-face {
		font-family: 'PretendardWOFFBold';
		font-weight: 700;
		font-display: swap;
		src:local("PretendardWOFFBold"), url("/Pretendard/Pretendard-Bold.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 600;
		font-display: swap;
		src:local("PretendardWOFFSemiBold"), url("/Pretendard/Pretendard-SemiBold.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 500;
		font-display: swap;
		src:local("PretendardWOFFMedium"), url("/Pretendard/Pretendard-Medium.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 400;
		font-display: swap;
		src:local("PretendardWOFFRegular"), url("/Pretendard/Pretendard-Regular.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 300;
		font-display: swap;
		src:local("PretendardWOFFLight"), url("/Pretendard/Pretendard-Light.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 200;
		font-display: swap;
		src:local("PretendardWOFFExtraLight"), url("/Pretendard/Pretendard-ExtraLight.woff"), format('woff');
	}

	@font-face {
		font-family: 'Pretendard';
		font-weight: 100;
		font-display: swap;
		src:local("PretnedardWOFFThin"), url("/Pretendard/Pretendard-Thin.woff"), format('woff');
	}
`;

export default GlobalFont;
