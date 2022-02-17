import styled from 'styled-components';

const Wrap = styled.section`
	max-width: 40rem;
	margin: 0 auto;
	color: #752c2c;
`;

function AboutPage() {
	return (
		<Wrap>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia
				consequuntur aut unde consequatur, asperiores quis porro similique eaque
				molestias perferendis doloribus deserunt quaerat odit.
			</p>
		</Wrap>
	);
}

export default AboutPage;
