export async function fetchCoins() {
    return await (await fetch('https://api.coinpaprika.com/v1/coins')).json()
}

export async function fetchInfo(coinId: string | undefined) {
    return await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
}

export async function fetchTickers(coinId: string | undefined) {
    return await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
}

export function fetchHistory(coinId: string | undefined) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7 * 2;
    return fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    ).then((response) => response.json());
}