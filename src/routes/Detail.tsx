import {Link, Route, Routes, useLocation, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchInfo, fetchTickers} from "../api";
import Chart from "./Chart";
import coin from "../components/Coin";
import styled from "styled-components";
import backImg from '../img/back.png';
import {Back, Header} from "../styles/styles";

interface ITickers {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "circulating_supply": 18974775,
    "total_supply": 18974775,
    "max_supply": number,
    "beta_value": 0.898366,
    "first_data_at": "2010-07-17T00:00:00Z",
    "last_updated": "2022-03-05T04:16:09Z",
    "quotes": {
        "USD": {
            "price": 38997.43578843336,
            "volume_24h": 30431158679.34092,
            "volume_24h_change_24h": -5.28,
            "market_cap": 739967569662,
            "market_cap_change_24h": -5.57,
            "percent_change_15m": -0.2,
            "percent_change_30m": -0.27,
            "percent_change_1h": -0.05,
            "percent_change_6h": -0.69,
            "percent_change_12h": -4.24,
            "percent_change_24h": -5.58,
            "percent_change_7d": -1.07,
            "percent_change_30d": 5.5,
            "percent_change_1y": -17.43,
            "ath_price": 68692.137036932,
            "ath_date": "2021-11-10T16:51:15Z",
            "percent_from_price_ath": -43.16
        }
    }
}

interface IInfo {
    "id": "bnb-binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "rank": 4,
    "is_new": false,
    "is_active": true,
    "type": "coin",
    "tags": [
        {
            "id": "smart-contracts",
            "name": "Smart Contracts",
            "coin_counter": 427,
            "ico_counter": 305
        },
        {
            "id": "exchange",
            "name": "Exchange",
            "coin_counter": 116,
            "ico_counter": 75
        },
        {
            "id": "monetization",
            "name": "Monetization",
            "coin_counter": 66,
            "ico_counter": 49
        },
        {
            "id": "trading-investing",
            "name": "Trading & Investing",
            "coin_counter": 82,
            "ico_counter": 58
        },
        {
            "id": "delegated-proof-of-stake",
            "name": "Delegated Proof Of Stake",
            "coin_counter": 40,
            "ico_counter": 7
        },
        {
            "id": "cryptocurrency",
            "name": "Cryptocurrency",
            "coin_counter": 782,
            "ico_counter": 40
        }
    ],
    "team": [
        {
            "id": "changpeng-zhao-",
            "name": "Changpeng Zhao ",
            "position": "CEO"
        },
        {
            "id": "roger-wang",
            "name": "Roger Wang",
            "position": "CTO"
        },
        {
            "id": "james-hofbauer",
            "name": "James Hofbauer",
            "position": "Chief Architect"
        },
        {
            "id": "ted-lin",
            "name": "Ted Lin",
            "position": "Chief Growth Officer"
        },
        {
            "id": "allan-yan",
            "name": "Allan Yan",
            "position": "Director of Product"
        },
        {
            "id": "leah-li",
            "name": "Leah Li ",
            "position": "Global PR Manager"
        },
        {
            "id": "sunny-li",
            "name": "Sunny Li",
            "position": "Operations Director"
        },
        {
            "id": "ella-zhang",
            "name": "Ella Zhang ",
            "position": "Head of Binance Labs"
        },
        {
            "id": "christy-hyungwon-choi",
            "name": "Christy Hyungwon Choi",
            "position": "Director at Binance Labs"
        },
        {
            "id": "nicholas-ng",
            "name": "Nicholas Ng",
            "position": "Senior Product Manager"
        },
        {
            "id": "jin-lan",
            "name": "Jin Lan",
            "position": "Senior Software Developer"
        },
        {
            "id": "david-k",
            "name": "David K. ",
            "position": "Head of Singapore"
        },
        {
            "id": "licheng-cao",
            "name": "Licheng Cao",
            "position": "Senior Android Development Engineer"
        },
        {
            "id": "zhongyi-cheng",
            "name": "Zhongyi Cheng",
            "position": "Operation Manager"
        },
        {
            "id": "kathy-zhu",
            "name": "Kathy Zhu",
            "position": "Operations"
        },
        {
            "id": "rebecca-m",
            "name": "Rebecca M.",
            "position": "Talent Manager"
        },
        {
            "id": "pheng-t",
            "name": "Pheng T.",
            "position": "Talent Acquisition"
        },
        {
            "id": "jane-zhan",
            "name": "Jane Zhan",
            "position": "Talent Acquisition"
        },
        {
            "id": "diem-tran-kieu",
            "name": "Diem Tran Kieu",
            "position": "Vietnam Marketing Management"
        }
    ],
    "description": "Binance Coin is the digital token of the Binance exchange. \r\nIt is an exchanging token only for cryptographic forms of money. The name \"Binance\" is a blend of binary and finance.",
    "message": "",
    "open_source": true,
    "started_at": "2017-07-15T00:00:00Z",
    "development_status": string,
    "hardware_wallet": true,
    "proof_type": string,
    "org_structure": "Centralized",
    "hash_algorithm": "Tendermint (BFT)",
    "links": {
        "explorer": [
            "https://bscscan.com/",
            "https://explorer.binance.org/"
        ],
        "facebook": [
            "https://www.facebook.com/binanceexchange/"
        ],
        "reddit": [
            "https://www.reddit.com/r/binance/"
        ],
        "source_code": [
            "https://github.com/binance-chain/"
        ],
        "website": [
            "https://www.binance.com/"
        ],
        "youtube": [
            "https://www.youtube.com/watch?v=hmuJuDvBp78"
        ]
    },
    "links_extended": [
        {
            "url": "https://binance.zendesk.com/hc/en-us/articles/115000497111-Binance-Coin-BNB-",
            "type": "announcement"
        },
        {
            "url": "https://binance.zendesk.com/hc/en-us/categories/115000056351",
            "type": "blog"
        },
        {
            "url": "https://bscscan.com/",
            "type": "explorer"
        },
        {
            "url": "https://explorer.binance.org/",
            "type": "explorer"
        },
        {
            "url": "https://www.facebook.com/binanceexchange/",
            "type": "facebook"
        },
        {
            "url": "https://www.reddit.com/r/binance/",
            "type": "reddit",
            "stats": {
                "subscribers": 811463
            }
        },
        {
            "url": "https://binance.slack.com/join/shared_invite/MjEwOTgxNTkzMjE3LTE0OTk4NDQ4NjAtYTUzNjY4NDRmZg",
            "type": "slack"
        },
        {
            "url": "https://github.com/binance-chain/",
            "type": "source_code"
        },
        {
            "url": "https://t.me/binanceexchange",
            "type": "telegram",
            "stats": {
                "members": 155688
            }
        },
        {
            "url": "https://twitter.com/binance",
            "type": "twitter",
            "stats": {
                "followers": 7840014
            }
        },
        {
            "url": "https://www.binance.com/",
            "type": "website"
        },
        {
            "url": "https://www.youtube.com/watch?v=hmuJuDvBp78",
            "type": "youtube"
        }
    ],
    "whitepaper": {
        "link": "https://www.binance.com/resources/ico/Binance_WhitePaper_en.pdf",
        "thumbnail": null
    },
    "first_data_at": "2017-07-25T00:00:00Z",
    "last_data_at": "2022-03-05T05:45:00Z"
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CoinImg = styled.img`
  display: block;
  width: 92px;
  height: 92px;
  margin: 20px auto;
`
const CoinName = styled.span`
  font-size: 37px;
  text-align: center;
`
const ContentWrapper = styled.div`
  display: flex;
  width: 332px;
  padding: 20px;
  margin: 10px auto;
  justify-content: center;
  column-gap: 10px;
  background-color: #00000050;
  border-radius: 15px;
`
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 155px;
  row-gap: 10px;
`
const Content = styled.div<{ fontSize: string }>`
  font-size: ${props => props.fontSize};
  text-align: center;
`
const Tabs = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  column-gap: 30px;

`
const Tab = styled.span<{ isTapped: boolean }>`
  display: flex;
  width: 161px;
  height: 44px;
  border: 1px solid white;
  border-radius: 70px;
  font-size: 23px;
  align-items: center;
  justify-content: center;
  color: ${props => props.isTapped ? '#000000' : 'inherit'};
  background-color: ${props => props.isTapped ? '#FFFFFF' : '#FFFFFF16'};
`

function Detail() {
    const {coinId} = useParams()
    const {
        isLoading: loadingTickers,
        data: detail
    } = useQuery<ITickers>(["detail", coinId], () => fetchTickers(coinId), {refetchInterval: 5000})
    const {isLoading: loadingInfo, data: info} = useQuery<IInfo>(["info", coinId], () => fetchInfo(coinId))
    const loading = loadingTickers || loadingInfo
    const currentLocation = useLocation();
    return (
        <Wrapper>
            {loading ? <Header>Loading Coin...</Header>
                :
                <>
                    <Link to={'/'}>
                        <Back src={backImg}/>
                    </Link>
                    <CoinImg src={`https://cryptoicon-api.vercel.app/api/icon/${info?.symbol.toLowerCase()}`}
                             alt={'Crypto Icon'}/>
                    <CoinName>{info?.name}</CoinName>
                    <ContentWrapper>
                        <ContentBox>
                            <Content fontSize={'27px'}>price</Content>
                            <Content fontSize={'21px'}>$ {detail?.quotes.USD.price.toFixed(3)}</Content>
                        </ContentBox><ContentBox>
                        <Content fontSize={'27px'}>supplied</Content>
                        <Content fontSize={'20px'}>{detail?.total_supply}
                            <br/>/{detail ? detail.max_supply !== 0 ? detail.max_supply : `unlimited` : null}</Content>
                    </ContentBox>
                    </ContentWrapper>
                    <ContentWrapper>
                        <Content
                            fontSize={'18px'}>
                            {info?.description.slice(0, 200)}
                            {info ? info.description.length > 200 ? '...' : '' : null}
                            {info ? info.description.length < 1 ? 'No Description' : '' : null}
                        </Content>
                    </ContentWrapper>
                    <Tabs>
                        <Link to={'chart'}>
                            <Tab isTapped={currentLocation.pathname === `/${coinId}/chart`}>
                                Chart
                            </Tab>
                        </Link>
                        <Link to={'moreDetails'}>
                            <Tab isTapped={currentLocation.pathname === `/${coinId}/moreDetails`}>
                                More details
                            </Tab>
                        </Link>
                    </Tabs>
                    <Routes>
                        <Route path={`chart`} element={<ContentWrapper><Chart coinId={coinId}/></ContentWrapper>}/>
                        <Route path={`moreDetails`} element={<MoreDetails/>}/>
                    </Routes>
                </>
            }
        </Wrapper>
    );

    function MoreDetails() {
        return (
            <>
                <ContentWrapper>
                    <ContentBox>
                        <Content fontSize={'27px'}>started at</Content>
                        <Content fontSize={'21px'}>{detail ? detail.first_data_at : 'No data'}</Content>
                    </ContentBox><ContentBox>
                    <Content fontSize={'27px'}>last updated</Content>
                    <Content fontSize={'20px'}>{detail ? detail.last_updated : 'No data'}</Content>
                </ContentBox>
                </ContentWrapper>
                <ContentWrapper>
                    <ContentBox>
                        <Content fontSize={'27px'}>Dev status</Content>
                        <Content
                            fontSize={'21px'}>{info ? info.development_status === '' ? info.development_status : 'No data' : null}
                        </Content>
                    </ContentBox>
                    <ContentBox>
                        <Content fontSize={'27px'}>Proof Type</Content>
                        <Content
                            fontSize={'20px'}>{info ? info.proof_type === '' ? info.proof_type : 'No data' : null}</Content>
                    </ContentBox>
                </ContentWrapper>
            </>
        )
    }
}


export default Detail