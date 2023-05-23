import { createContext, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = () => {
  const [account, setAccount] = useState();

  return <AccountContext.Provider value={{
                account,
                setAccount,
        }}>


  </AccountContext.Provider>;
};
