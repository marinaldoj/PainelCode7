import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;

}

input, button, textarea{
    font-family: 'Roboto', sans-serif;
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1;
}

button{
    cursor: pointer;
    border: none;
}

a { 
    color: inherit;
    text-decoration:none;
} 

#root{
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 2% 4%;
    background: #E5E5E5;
}

@media (max-height: 600px){
    #root{
        height: 768px;
    }
}`