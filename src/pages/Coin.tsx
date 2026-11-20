import { useEffect, useState } from "react";
import styled from "styled-components";

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

// Coin 페이지 전체
const CoinPage = styled.div`
  max-width: 1500px;
  margin: 0 auto;

  h1 {
    margin: 0 0 24px;
    font-size: 30px;
  }
`;

// 왼쪽 목록 + 오른쪽 상세 영역
const CoinLayout = styled.div`
  display: grid;
  grid-template-columns: 340px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 1000px) {
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 16px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

// 양쪽 패널 공통 스타일
const Panel = styled.section`
  min-width: 0;
  padding: 24px;
  border: 1px solid #77764b;
  border-radius: 18px;
  background: #454a2a;

  body.black-theme & {
    background: #171717;
    border-color: #383838;
  }

  @media (max-width: 1000px) {
    padding: 16px;
  }
`;

// 왼쪽 코인 목록
const CoinList = styled.ul`
    max-height: 540px;
    overflow-y: auto;
    list-style: none;
    padding: 0 6px 0 0;
    margin: 0;

    li {
        margin-bottom: 8px;
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        background: #858969;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #30351d;
        border-radius: 10px;
    }

    body.black-theme &::-webkit-scrollbar-thumb {
        background: #555555;
    }

    body.black-theme &::-webkit-scrollbar-track {
        background: #171717;
    }

    @media (max-width: 700px) {
        max-height: 300px;
    }
`;

// 코인 선택 버튼
const CoinButton = styled.button`
  display: block;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #f4e9c9;
  color: #252b13;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: #dce0b7;
  }

  &.selected {
    background: #b9bd90;
    outline: 2px solid #f5d881;
    outline-offset: -2px;
  }

  body.black-theme & {
    background: #252525;
    color: #f5f5f5;
  }

  body.black-theme &:hover {
    background: #343434;
  }

  body.black-theme &.selected {
    background: #414141;
    outline-color: #999999;
  }
`;

// 코인 이름과 가격
const CoinTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  font-size: 14px;

  strong:first-child {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong:last-child {
    flex-shrink: 0;
    white-space: nowrap;
    text-align: right;
  }
`;

// 코인 기호와 변동률
const CoinBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;

// 오른쪽 상세 정보 카드 영역
const CoinStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 28px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

// 상세 카드 하나
const StatCard = styled.div`
  min-width: 0;
  padding: 22px;
  border-radius: 12px;
  background: #f4e9c9;
  color: #252b13;

  p {
    margin: 0 0 10px;
    font-size: 13px;
    color: #777765;
  }

  strong {
    font-size: 21px;
    overflow-wrap: anywhere;
  }

  body.black-theme & {
    background: #252525;
    color: #f5f5f5;
  }

  body.black-theme & p {
    color: #bbbbbb;
  }
`;

// 왼쪽 목록 제목
const PanelTitle = styled.h2`
  margin: 0 0 18px;
  font-size: 20px;
`;

// 오른쪽 상세 패널
const DetailPanel = styled(Panel)`
  min-height: 620px;

  @media (max-width: 700px) {
    min-height: auto;
  }
`;

// 오른쪽 코인 제목
const DetailTitle = styled.h2`
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #77764b;
  font-size: 30px;

  span {
    margin-left: 12px;
    font-size: 16px;
    color: #b9bd90;
  }

  body.black-theme & {
    border-bottom-color: #383838;
  }
`;

// 상승과 하락 색상
const CoinChange = styled.span<{ $up: boolean }>`
  color: ${props => props.$up ? "#087c32" : "#c52e2e"};
  font-weight: bold;

  body.black-theme & {
    color: ${props => props.$up ? "#73d69a" : "#ff8585"};
  }
`;

// 24시간 변동률
const CoinChangeText = styled.p`
  margin-top: 24px;
  font-size: 16px;
`;

// 오류 메시지
const ErrorMessage = styled.p`
  color: #ff8585;
`;

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
        <CoinPage>
            <h1>Coin Tracker</h1>

            {loading && <p>코인 데이터를 불러오는 중...</p>}

            {error && <ErrorMessage>{error}</ErrorMessage>}

            {!loading && !error && (
                <CoinLayout>
                    {/* 왼쪽: 코인 목록 */}
                    <Panel>
                        <PanelTitle>
                            Top 50 Coins ({coins.length}개)
                        </PanelTitle>

                        <CoinList>
                            {coins.map((coin) => (
                                <li key={coin.id}>
                                    <CoinButton
                                        type="button"
                                        className={
                                            selectedCoin?.id === coin.id ? "selected" : ""
                                        }
                                        onClick={() => setSelectedCoin(coin)}
                                    >
                                        <CoinTop>
                                            <strong>{coin.name}</strong>
                                            <strong>{formatPrice(coin.price_usd)}</strong>
                                        </CoinTop>

                                        <CoinBottom>
                                            <span>{coin.symbol}</span>

                                            <CoinChange
                                                $up={Number(coin.percent_change_24h) >= 0}
                                            >
                                                {formatChange(coin.percent_change_24h)}
                                            </CoinChange>
                                        </CoinBottom>
                                    </CoinButton>
                                </li>
                            ))}
                        </CoinList>
                    </Panel>

                    {/* 오른쪽: 코인 상세 정보 */}
                    <DetailPanel>
                        {selectedCoin ? (
                            <>
                                <DetailTitle>
                                    {selectedCoin.name}
                                    <span>{selectedCoin.symbol}</span>
                                </DetailTitle>

                                <CoinStats>
                                    <StatCard>
                                        <p>현재 가격 (USD)</p>
                                        <strong>
                                            {formatPrice(selectedCoin.price_usd)}
                                        </strong>
                                    </StatCard>

                                    <StatCard>
                                        <p>시가총액</p>
                                        <strong>
                                            {"$" + Number(
                                                selectedCoin.market_cap_usd
                                            ).toLocaleString("en-US")}
                                        </strong>
                                    </StatCard>

                                    <StatCard>
                                        <p>24시간 거래량</p>
                                        <strong>
                                            {"$" + Number(
                                                selectedCoin.volume24
                                            ).toLocaleString("en-US")}
                                        </strong>
                                    </StatCard>

                                    <StatCard>
                                        <p>시가총액 순위</p>
                                        <strong>{selectedCoin.rank}위</strong>
                                    </StatCard>
                                </CoinStats>

                                <CoinChangeText>
                                    24시간 변동률:{" "}
                                    <CoinChange
                                        $up={Number(
                                            selectedCoin.percent_change_24h
                                        ) >= 0}
                                    >
                                        {formatChange(selectedCoin.percent_change_24h)}
                                    </CoinChange>
                                </CoinChangeText>
                            </>
                        ) : (
                            <p>코인을 선택해주세요.</p>
                        )}
                    </DetailPanel>
                </CoinLayout>
            )}
        </CoinPage>
    );
}

export default Coin;