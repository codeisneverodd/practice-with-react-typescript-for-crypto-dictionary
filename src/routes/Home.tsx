import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import Coin from "../components/Coin";
import styled from "styled-components"
import {Header} from "../styles/styles";
import {useEffect, useState} from "react";
// import Loading from "../components/Loading";
// import {useEffect} from "react";

interface ICoin {
    id: string
    is_active: true
    is_new: false
    name: string
    rank: number
    symbol: string
    type: string
}

const Coins = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
`
const LoadMore = styled.div`
  display: flex;
  width: 161px;
  height: 44px;
  margin: 30px auto;
  border: 1px solid white;
  border-radius: 70px;
  font-size: 23px;
  align-items: center;
  justify-content: center;
  color: inherit;
  background-color: #FFFFFF16;

  &:hover {
    color: #000000;
    background-color: #FFFFFF;
  }
`

function Home() {
    const {isLoading, data} = useQuery<ICoin[]>(["allCoins"], fetchCoins)
    const [counts, setCounts] = useState(100)
    const [enable, setEnable] = useState(true)
    const onClick = () => setCounts(counts + 100)
    useEffect(() => {
        if (data ? data.length <= counts : false) setEnable(false)
    }, [counts])
    return (
        <Wrapper>
            {isLoading ? <Header>Loading...</Header>
                :
                <>
                    <Header>Coin Dictionary</Header>
                    <Coins>
                        {data?.slice(0, counts).map(coin =>
                            <Coin key={coin.id} id={coin.id} name={coin.name} rank={coin.rank} symbol={coin.symbol}
                                  is_active={coin.is_active} type={coin.type} is_new={coin.is_new}/>)}
                    </Coins>
                    {enable ? <LoadMore onClick={onClick}> Load More</LoadMore> : 'No More Coins Available'}
                </>
            }
        </Wrapper>
    )
}

export default Home