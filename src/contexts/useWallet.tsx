import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

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
  amountFormatted?: string;
};

type WalletContextData = {
  coinsWallet: Wallet;
  moneyWallet: Wallet;
  handleConvertMoneyToCoin: (value: string) => void;
  handleConvertCoinsToMoney: (value: string) => void;
  canProceedConvertMoneyToCoin: boolean;
  canProceedConvertCoinsToMoney: boolean;
  coinsValue: number;
  cashValue: number;
  handleTransferMoneyWalletToCoinsWallet: () => void;
  handleTransferCoinsWalletToMoneyWallet: () => void;
};

type WalletProviderProps = {
  children: React.ReactNode;
};

const WalletContext = createContext({} as WalletContextData);

function WalletProvider({ children }: WalletProviderProps) {
  const [coinsWallet, setCoinsWallet] = useState<Wallet>({} as Wallet);
  const [moneyWallet, setMoneyWallet] = useState<Wallet>({} as Wallet);
  const [coinsValue, setCoinsValue] = useState(0);
  const [cashValue, setCashValue] = useState(0);
  const [canProceedConvertMoneyToCoin, setCanProceedConvertMoneyToCoin] =
    useState(false);
  const [canProceedConvertCoinsToMoney, setCanProceedConvertCoinsToMoney] =
    useState(false);

  const handleConvertMoneyToCoin = useCallback(
    (value: string) => {
      if (moneyWallet && moneyWallet?.amount < Number(value)) {
        setCanProceedConvertMoneyToCoin(false);
        toast.warning("Saldo insuficiente");
        return;
      }
      setCanProceedConvertMoneyToCoin(true);
      setCoinsValue(value ? parseInt(value) * 100 : 0);
    },
    [moneyWallet]
  );

  const handleConvertCoinsToMoney = useCallback(
    (value: string) => {
      if (coinsWallet?.amount < Number(value)) {
        setCanProceedConvertCoinsToMoney(false);
        toast.warning("Saldo insuficiente");
        return;
      }
      setCanProceedConvertCoinsToMoney(true);
      setCashValue(value ? parseInt(value) / 100 : 0 / 100);
    },
    [coinsWallet]
  );

  const handleTransferMoneyWalletToCoinsWallet = useCallback(() => {
    if (moneyWallet.amount <= 0) {
      setCanProceedConvertMoneyToCoin(false);
      throw new Error("Saldo insuficiente");
    }

    const coinsWalletUpdated: Wallet = {
      ...coinsWallet,
      amount: coinsWallet?.amount + coinsValue,
    };

    setCoinsWallet(coinsWalletUpdated);

    const amount = moneyWallet?.amount - coinsValue / 100;

    const moneyWalletUpdated: Wallet = {
      ...moneyWallet,
      amount,
      amountFormatted: formatCurrencyPtBr(amount),
    };

    setMoneyWallet(moneyWalletUpdated);
  }, [coinsValue, coinsWallet, moneyWallet]);

  const handleTransferCoinsWalletToMoneyWallet = useCallback(() => {
    if (coinsWallet.amount <= 0) {
      setCanProceedConvertCoinsToMoney(false);
      throw new Error("Saldo insuficiente");
    }

    const amountMoney = moneyWallet?.amount + cashValue;

    const moneyWalletUpdated: Wallet = {
      ...moneyWallet,
      amount: amountMoney,
      amountFormatted: formatCurrencyPtBr(amountMoney),
    };

    setMoneyWallet(moneyWalletUpdated);

    const amountCoins = coinsWallet?.amount - Number(cashValue) * 100;

    const coinsWalletUpdated: Wallet = {
      ...coinsWallet,
      amount: amountCoins,
    };

    setCoinsWallet(coinsWalletUpdated);
  }, [cashValue, coinsWallet, moneyWallet]);

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

      const coinsWallet =
        wallets.find((wallet) => wallet.walletTypeId === WalletType.COINS) ||
        ({} as Wallet);

      setCoinsWallet(coinsWallet);

      const moneyWallet =
        wallets.find((wallet) => wallet.walletTypeId === WalletType.MONEY) ||
        ({} as Wallet);

      setMoneyWallet(moneyWallet);
    }

    loadWallet();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        coinsWallet,
        moneyWallet,
        handleConvertMoneyToCoin,
        canProceedConvertMoneyToCoin,
        canProceedConvertCoinsToMoney,
        coinsValue,
        cashValue,
        handleTransferMoneyWalletToCoinsWallet,
        handleConvertCoinsToMoney,
        handleTransferCoinsWalletToMoneyWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

const useWallet = () => {
  const context = useContext(WalletContext);
  return context;
};

export { useWallet, WalletProvider };
