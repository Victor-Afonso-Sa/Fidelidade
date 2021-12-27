import { createContext, useContext, useEffect, useState } from "react";
import { formatCurrencyPtBr } from "../utils/formatCurrencyPtBr";

enum WalletType {
  COINS = 1,
  MONEY = 2,
}

type Wallet = {
  id: number;
  drugstoreId: number;
  userId: number;
  cpf: string | null;
  walletTypeId: number;
  name: string;
  amount: number;
  amountFormatted: string;
};

type WalletContextData = {
  coinsWallet: Wallet | undefined;
  moneyWallet: Wallet | undefined;
};

type WalletProviderProps = {
  children: React.ReactNode;
};

const WalletContext = createContext({} as WalletContextData);

function WalletProvider({ children }: WalletProviderProps) {
  const [coinsWallet, setCoinsWallet] = useState<Wallet>();
  const [moneyWallet, setMoneyWallet] = useState<Wallet>();

  useEffect(() => {
    async function loadWallet() {
      // const response = await api.get<Wallet[]>("Wallet/GetByUserId/1");
      // const wallets = response.data.map((wallet) => {
      //   return {
      //     ...wallet,
      //     amountFormatted:
      //       wallet.walletTypeId === WalletType.MONEY
      //         ? formatCurrencyPtBr(wallet.amount)
      //         : wallet.amount.toString(),
      //   };
      // });
      const wallets: Wallet[] = [
        {
          id: 1,
          drugstoreId: 1,
          userId: 1,
          cpf: null,
          walletTypeId: 1,
          name: "Pontos",
          amount: 100,
          amountFormatted: "0",
        },
        {
          id: 2,
          drugstoreId: 1,
          userId: 1,
          cpf: null,
          walletTypeId: 2,
          name: "Dinheiro",
          amount: 300,
          amountFormatted: formatCurrencyPtBr(300),
        },
      ];

      setCoinsWallet(
        wallets.find((wallet) => wallet.walletTypeId === WalletType.COINS)
      );

      setMoneyWallet(
        wallets.find((wallet) => wallet.walletTypeId === WalletType.MONEY)
      );
    }

    loadWallet();
  }, []);

  return (
    <WalletContext.Provider value={{ coinsWallet, moneyWallet }}>
      {children}
    </WalletContext.Provider>
  );
}

const useWallet = () => {
  const context = useContext(WalletContext);
  return context;
};

export { useWallet, WalletProvider };
