import styled from "styled-components";

export const HeaderArea = styled.div`
background-color: #1890ff;
height: 60px;
border-bottom: 1px solid #ccc;

.container {
    max-width: 1000px;
    margin: auto; 
    display: flex;
}

a {
    text-decoration: none;
}

.logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-title {
        font-size: 30px;
        font-weight: bold;
        color: #FFF;
    }
}

nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul {
        display: flex;
        align-items:center;
        height:40px;
    }

    li {
        margin-left: 20px;
        margin-right: 20px;

        a {
            color: #FFF;
            font-size: 16px;
            text-decoration: none;

            &:hover {
                color: #333;
            }
        }
    }

}

`;