import {Link, Route, Routes, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchInfo, fetchTickers} from "../api";
import Chart from "./Chart";
import coin from "../components/Coin";

interface ITickers {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "circulating_supply": 18974775,
    "total_supply": 18974775,
    "max_supply": 21000000,
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
    "development_status": "Working product",
    "hardware_wallet": true,
    "proof_type": "Byzantine Fault Tolerance",
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

function Detail() {
    const {coinId} = useParams()
    const {
        isLoading: loadingTickers,
        data: detail
    } = useQuery<ITickers>(["tickers", coinId], () => fetchTickers(coinId))
    const {isLoading: loadingInfo, data: info} = useQuery<IInfo>(["info", coinId], () => fetchInfo(coinId))
    const loading = loadingTickers || loadingInfo
    return (
        <>
            {loading ? <h1>Loading Details....</h1>
                :
                <>
                    <nav>
                        <Link to={'/'}>
                            Back to Home
                        </Link>
                    </nav>
                    <img src={`https://cryptoicon-api.vercel.app/api/icon/${info?.symbol.toLowerCase()}`}
                         alt={'Crypto Icon'}/>
                    <ul>
                        <li>name: {info?.name}</li>
                        <li>price: $ {detail?.quotes.USD.price.toFixed(3)}</li>
                        <li>first_data_at: {detail?.first_data_at}</li>
                        <li>last_updated: {detail?.last_updated}</li>
                        <li>supplied: {detail?.total_supply} / {detail?.max_supply} coins</li>
                        <li>tags: {info?.tags.map(tag => tag.name + ' ')}</li>
                        <li>link: {info?.links.explorer[0]}</li>
                        <li>development_status: {info?.development_status}</li>
                        <li>description: {info?.description}</li>
                    </ul>
                    <nav>
                        <li>
                            <Link to={`chart`}>
                                click here and show chart
                            </Link>
                        </li>
                        <li>
                            <Link to={''}>
                                click here to close chart
                            </Link>
                        </li>
                    </nav>

                    <Routes>
                        <Route path={`chart`} element={<Chart coinId={coinId}/>}/>
                    </Routes>
                </>
            }
        </>
    );
}

export default Detail