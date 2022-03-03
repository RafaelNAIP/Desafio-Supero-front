import styled from 'styled-components';

export const Header = styled.div`
    height: 20%;
    width: 100%;
    background-color: #6E81C5;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const FilterContainer = styled.div`
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Filter = styled.input`
    width: 30%;
    height: 22.6px;
    border: 1px solid #000;
    border-radius: 5px;
`;

export const FilterButton = styled.button`
    height: 26.6px;
    width: 3%;
    background-color: #B2BABB;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FilterButtonImage = styled.img`
    height: 14px;
    width: 14px;
`;

export const ClientInformationContainer = styled.div`
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ClientInformation = styled.div`
    height: 100%;
    width: 40%;
`;
export const ClientInformationText = styled.p`
    font-size: 15px;
`;




