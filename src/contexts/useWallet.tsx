import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

import { formatCurrencyPtBr } from "../utils/formatCurrencyPtBr";

enum WalletType {
  COINS = 1,
  MONEY = 2,
}

const CONVERSTION_POINTS = 1;

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
  handleTransferMoneyWalletToCoinsWallet: () => Promise<void>;
  handleTransferCoinsWalletToMoneyWallet: () => Promise<void>;
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
      setCoinsValue(value ? parseInt(value) * CONVERSTION_POINTS : 0);
    },
    [moneyWallet]
  );

  const handleConvertCoinsToMoney = useCallback(
    (value: string) => {
      if (coinsWallet?.amount < Number(value)) {
        setCanProceedConvertCoinsToMoney(false);
        toast.warning("Moedas insuficiente");
        return;
      }
      setCanProceedConvertCoinsToMoney(true);
      setCashValue(
        value ? parseInt(value) / CONVERSTION_POINTS : 0 / CONVERSTION_POINTS
      );
    },
    [coinsWallet]
  );

  const handleTransferMoneyWalletToCoinsWallet = useCallback(async () => {
    const quantity = coinsValue / CONVERSTION_POINTS;
    if (moneyWallet.amount < quantity) {
      setCanProceedConvertMoneyToCoin(false);
      throw new Error("Saldo insuficiente");
    }

    const amountCoins = coinsWallet?.amount + coinsValue;

    const coinsWalletUpdated: Wallet = {
      ...coinsWallet,
      amount: amountCoins,
    };

    setCoinsWallet(coinsWalletUpdated);

    const amount = moneyWallet?.amount - quantity;

    const moneyWalletUpdated: Wallet = {
      ...moneyWallet,
      amount,
      amountFormatted: formatCurrencyPtBr(amount),
    };

    setMoneyWallet(moneyWalletUpdated);

    await api.post("Wallet/Transfer", {
      walletOriginId: moneyWallet.id,
      walletTargetId: coinsWallet.id,
      quantity: coinsValue,
    });

    await loadWallet();
  }, [coinsValue, coinsWallet, moneyWallet]);

  const handleTransferCoinsWalletToMoneyWallet = useCallback(async () => {
    const quantity = cashValue * CONVERSTION_POINTS;
    if (coinsWallet.amount < quantity) {
      setCanProceedConvertCoinsToMoney(false);
      throw new Error("Moedas insuficiente");
    }

    const amountMoney = moneyWallet?.amount + cashValue;

    const moneyWalletUpdated: Wallet = {
      ...moneyWallet,
      amount: amountMoney,
      amountFormatted: formatCurrencyPtBr(amountMoney),
    };

    setMoneyWallet(moneyWalletUpdated);

    const amountCoins = coinsWallet?.amount - quantity;

    const coinsWalletUpdated: Wallet = {
      ...coinsWallet,
      amount: amountCoins,
    };

    setCoinsWallet(coinsWalletUpdated);

    await api.post("Wallet/Transfer", {
      walletOriginId: coinsWallet.id,
      walletTargetId: moneyWallet.id,
      quantity: cashValue,
    });

    await loadWallet();
  }, [cashValue, coinsWallet, moneyWallet]);

  async function loadWallet() {
    try {
      const response = await api.get<Wallet[]>("Wallet/GetByUserId/1");
      const wallets = response.data.map((wallet) => {
        return {
          ...wallet,
          amountFormatted:
            wallet.walletTypeId === WalletType.MONEY
              ? formatCurrencyPtBr(wallet.amount)
              : wallet.amount.toString(),
        };
      });

      const coinsWallet =
        wallets.find((wallet) => wallet.walletTypeId === WalletType.COINS) ||
        ({} as Wallet);

      setCoinsWallet(coinsWallet);

      const moneyWallet =
        wallets.find((wallet) => wallet.walletTypeId === WalletType.MONEY) ||
        ({} as Wallet);

      setMoneyWallet(moneyWallet);
    } catch (error: any) {
      if (error.message === "Network Error") {
        toast.error("Sem conexão com o servidor");
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
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
