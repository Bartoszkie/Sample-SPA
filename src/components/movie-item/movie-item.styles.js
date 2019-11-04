import styled from 'styled-components';

export const MovieItemContainer = styled.li`
    padding: .5rem .9rem;

    background-color: white;

    border: .1rem solid #950740;
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }

    cursor: pointer;
    transition: .2s ease-in-out all;

    &:hover {
        transform: scale(1.1);
    }
`;

export const InfoItem = styled.span`
    margin-left: auto;
`;