import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import Coin from "../components/Coin";
import styled from "styled-components"

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
  flex-direction: column;
`

function Home() {
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins)
    return (
        <>
            {isLoading ? <h1>Loading...</h1>
                :
                <>
                    <h1>Coin Tracker</h1>
                    <Coins>
                        {data?.slice(0, 100).map(coin =>
                            <Coin key={coin.id} id={coin.id} name={coin.name} rank={coin.rank} symbol={coin.symbol}
                                  is_active={coin.is_active} type={coin.type} is_new={coin.is_new}/>)}
                    </Coins>
                </>
            }
        </>
    )
}

export default Home