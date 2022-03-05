import ApexChart from "react-apexcharts";
import {useQuery} from "react-query";
import {fetchHistory} from "../api";

interface IHistory {
    "time_open": "2019-01-01T00:00:00Z",
    "time_close": "2019-01-01T23:59:59Z",
    "open": 3743.13383814,
    "high": 3848.768792,
    "low": 3695.32467935,
    "close": 3846.6792974,
    "volume": 3062073034,
    "market_cap": 67153692335
}

interface IChart {
    coinId: string | undefined
}

function Chart({coinId}: IChart) {
    const {isLoading, data} = useQuery<IHistory[]>(["history", coinId], () => fetchHistory(coinId))
    return (
        <>
            {isLoading ? <h1>Chart Loading..</h1>
                :
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Closed Price",
                            data: data?.map((price) => price.close.toFixed(3)),
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        grid: {show: false},
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: {show: false},
                            axisTicks: {show: false},
                            labels: {show: false},
                        },
                    }}
                />
            }
        </>
    )
}

export default Chart