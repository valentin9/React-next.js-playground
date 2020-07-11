import styled from 'styled-components';

const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;

    .title-link {
        color: #0070f3;
        text-decoration: none;
    }
`;

const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
`;

export default () => {
    return (
        <main>
            <Title>
                Welcome to <span className="title-link">Open Files!</span>
            </Title>

            <Description>
                You can upload files here for everyone to see!
            </Description>
        </main>
    );
};
