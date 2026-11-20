import { useEffect, useState } from "react";

type CoinItem = {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    market_cap_usd: string;
    volume24: number;
    rank: number;
    percent_change_24h: string;
};

function formatPrice(price: string) {
    const number = Number(price);

    if (!Number.isFinite(number)) {
        return "가격 정보 없음";
    }

    if (number >= 1) {
        return (
            "$" +
            number.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })
        );
    }

    return (
        "$" +
        number.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8,
        })
    );
}

function formatChange(change: string) {
    const number = Number(change);

    if (!Number.isFinite(number)) {
        return "정보 없음";
    }

    const arrow = number >= 0 ? "▲" : "▼";

    return arrow + Math.abs(number).toFixed(2) + "%";
}

function Coin() {
    const [coins, setCoins] = useState<CoinItem[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<CoinItem | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://api.coinlore.net/api/tickers/?start=0&limit=50")
            .then(response => {
                console.log("응답 상태:", response.status);

                if (!response.ok) {
                    throw new Error("HTTP 오류: " + response.status);
                }

                return response.json();
            })
            .then(result => {
                console.log("API 응답:", result);

                if (!Array.isArray(result.data)) {
                    throw new Error("코인 목록 데이터가 없습니다.");
                }

                setCoins(result.data);

                if (result.data.length > 0) {
                    setSelectedCoin(result.data[0]);
                }
            })
            .catch(err => {
                console.error("API 오류:", err);
                setError(String(err));
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="coin-page">
            <h1>Coin Tracker</h1>

            {loading && <p>코인 데이터를 불러오는 중...</p>}

            {error && <p className="coin-error">{error}</p>}

            {!loading && !error && (
                <div className="coin-layout">
                    {/* 왼쪽: 코인 목록 */}
                    <section className="coin-list-panel">
                        <h2>Top 50 Coins ({coins.length}개)</h2>

                        <ul className="coin-list">
                            {coins.map(coin => (
                                <li key={coin.id}>
                                    <button
                                        className={
                                            "coin-list-button" +
                                            (selectedCoin?.id === coin.id ? " selected" : "")
                                        }
                                        type="button"
                                        onClick={() => setSelectedCoin(coin)}>
                                        <div className="coin-list-top">
                                            <strong>{coin.name}</strong>
                                            <strong>{formatPrice(coin.price_usd)}</strong>
                                        </div>

                                        <div className="coin-list-bottom">
                                            <span>{coin.symbol}</span>

                                            <span
                                                className={
                                                    Number(coin.percent_change_24h) >= 0
                                                        ? "coin-up"
                                                        : "coin-down"
                                                }>
                                                {formatChange(coin.percent_change_24h)}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 오른쪽: 상세 정보 */}
                    <section className="coin-detail-panel">
                        {selectedCoin ? (
                            <>
                                <h2>
                                    {selectedCoin.name}
                                    <span className="coin-symbol">{selectedCoin.symbol}</span>
                                </h2>

                                <div className="coin-stats">
                                    <div className="coin-stat-card">
                                        <p>현재 가격 (USD)</p>
                                        <strong>
                                            ${Number(selectedCoin.price_usd).toLocaleString()}
                                        </strong>
                                    </div>

                                    <div className="coin-stat-card">
                                        <p>시가총액</p>
                                        <strong>
                                            ${Number(selectedCoin.market_cap_usd).toLocaleString()}
                                        </strong>
                                    </div>

                                    <div className="coin-stat-card">
                                        <p>24시간 거래량</p>
                                        <strong>
                                            ${Number(selectedCoin.volume24).toLocaleString()}
                                        </strong>
                                    </div>

                                    <div className="coin-stat-card">
                                        <p>시가총액 순위</p>
                                        <strong>{selectedCoin.rank}위</strong>
                                    </div>
                                </div>

                                <p className="coin-change">
                                    24시간 변동률: {selectedCoin.percent_change_24h}%
                                </p>
                            </>
                        ) : (
                            <p>코인을 선택해주세요.</p>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
}

export default Coin;