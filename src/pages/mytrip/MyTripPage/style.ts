import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
`;

export const NoUpCommingContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:15px;
`

export const CreateMyTripButton = styled.div`
    width:100%;
    padding: 20px;
    display:flex;
    justify-content:space-between;

    border: ${({ theme }) => `1px dashed ${theme.blue02}`};
    border-radius:10px;

    svg{
        width:36px;
        height:36px;

        path{
            fill:${({theme}) => theme.main};
        }
    }
`

export const CreateMyTripTextWrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:flex-start;
`;

export const TextHighlight = styled.span`
    color: ${({ theme }) => theme.main};
`;

export const CreateMyTripTextButton = styled.div<{
    hasTripHistory: boolean
}>`
    display:flex;
    justify-content:center;
    align-items:center;
    gap:7px;

    padding-top:15px;
    padding-bottom:15px;
    background-color:${({theme, hasTripHistory}) => hasTripHistory ? theme.white : theme.main };
    border: ${({theme, hasTripHistory}) => hasTripHistory === true && `.5px solid ${theme.main}` };
    border-radius:10px;

    cursor:pointer;

    svg{
        width:20px;
        height:20px;

        path{
            fill:${({theme, hasTripHistory}) => hasTripHistory ? '#BDBDBD' : theme.white};
        }
    }
`


export const ContainerWithPlan = styled.div`
    display: flex;
    flex-direction: column;
    gap:15px;
    
    width: 100%;
    position: relative;
`;


export const ScheduleCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 15px;

    width: 100%;
    overflow: auto;

    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar{
        display: none;
    }
`;

export const CreateMyTripScheduleBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin-top: 28px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.gray05};

    padding: 24px 100px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.gray02};
`;

export const ContentHeadingWrappper = styled.div`
    margin-top: 35px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:20px 13px;
    gap:20px;
`;

export const ScheduleAllBtn = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;

    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    color: ${({ theme }) => theme.gray01};
`;

export const ShowAllTrips = styled(Link)`
    display:flex;
    align-items:center;
    gap:5px;

    text-decoration:none;

    svg{
        width:16px;
        height:16px;

        path{
            fill:#424242;
        }
    }
`