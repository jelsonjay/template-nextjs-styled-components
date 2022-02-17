import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/Global';

const theme = {
	colors: {
		primary: '#64257e44',
		secondary: '#471258'
	}
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
