import ApexChart from "react-apexcharts";
import {useQuery} from "react-query";
import {fetchHistory} from "../api";
import {Header} from "../styles/styles";

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
    const {
        isLoading,
        data
    } = useQuery<IHistory[]>(["history", coinId], () => fetchHistory(coinId), {refetchInterval: 5000})
    return (
        <>
            {isLoading ? <Header>Chart Loading..</Header>
                :
                <ApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => price.close),
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
                            type: "datetime",
                            categories: data?.map((price) => price.time_close),
                        },
                        fill: {
                            type: "gradient",
                            gradient: {gradientToColors: ["#0be881"], stops: [0, 100]},
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            }
        </>
    )
}

export default Chart