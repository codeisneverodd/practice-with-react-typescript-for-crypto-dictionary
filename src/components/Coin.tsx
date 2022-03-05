import styled from "styled-components"
import {Link} from "react-router-dom";

interface ICoin {
    id: string
    is_active: true
    is_new: false
    name: string
    rank: number
    symbol: string
    type: string
}

const Wrapper = styled.div`
  border: 1px solid black;
  margin: 10px;
`

function Coin({name, id, symbol, is_active}: ICoin) {
    return (
        <Wrapper>
            <img src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`} alt={'Crypto Icon'}/>
            <ul>
                <li>name: {name}</li>
                <li>is_active: {is_active ? 'active' : 'unactivated'}</li>
            </ul>
            <Link to={`/${id}`}>
                click to see detail &gt;
            </Link>
        </Wrapper>
    )
}

export default Coin