import { H2 } from './styled';
import styled from 'styled-components';
const Wrap = styled.section`
	max-width: 70rem;
	margin: 0 auto;
	color: ${props => props.theme.colors.paragraph};
`;

function AboutPage() {
	return (
		<Wrap>
			<H2>About Page</H2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia
				consequuntur aut unde consequatur, asperiores quis porro similique eaque
				molestias perferendis doloribus deserunt quaerat odit.
			</p>
		</Wrap>
	);
}

export default AboutPage;
