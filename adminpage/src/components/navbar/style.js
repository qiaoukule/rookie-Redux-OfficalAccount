import styled from 'styled-components';
export const NavbarBox = styled.div`
    height: 66px;
    width: 100%;
    background-color: white;
`

export const NavbarUser = styled.div`
    height: 66px; //不能写100%
    width: 250px;
    float: right;  //left和right都一样欸
    background-color: white;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    `

export const NavbarIcons = styled.div`
    margin: 8px;
    `