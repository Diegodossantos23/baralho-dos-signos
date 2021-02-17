import styled from 'styled-components'

export const CardContainer = styled.div`
        background-color: #ff4d4d;
        color: #fff;
        
        margin: 25px 10px 0;
        padding: 5px 0px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #b30000;
        
        width: 150px;
        height: 200px;

        h3{
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 10px;
        }

        img{
            width: 140px;
            height: 100px;

            background-color: #fff;
            
            object-fit: contain;
            
            
            border: 1px solid #b30000;
            border-radius: 100%;

            box-sizing: border-box;
            margin-bottom: 10px;
            
            padding: 8px;
            flex: 1;
        }

        p{
            font-size: 14px;
            
        }
`