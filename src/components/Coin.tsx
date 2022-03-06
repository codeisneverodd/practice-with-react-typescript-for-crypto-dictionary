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
  display: flex;
  flex-direction: column;
  width: 92px;
  height: 92px;
  padding: 5px;
  margin: 10px;
  background-color: #FFFFFF12;
  border-radius: 13px;
`
const CoinImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  margin: auto;
`
const Symbol = styled.div`
  font-size: 19px;
  text-align: center;
`

function Coin({id, symbol}: ICoin) {
    return (
        <Link to={`/${id}`}>
            <Wrapper>
                <CoinImg src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
                         alt={'Crypto Icon'}/>
                <Symbol>{symbol}</Symbol>
            </Wrapper>
        </Link>
    )
}

export default Coin