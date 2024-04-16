import { BigNumberState } from "@dappworks/kit";
import { ethers } from "ethers";
import numeral from 'numeral'
import BigNumber from 'bignumber.js';

export type TypeWarpBigNumber = {
  value: string;
  format: string;
  decimals: string;
};

export const helper = {
  env: {
    //@ts-ignore
    isBrower: typeof window === 'undefined' ? false : true,
    isIopayMobile: global?.navigator?.userAgent && (global?.navigator?.userAgent.includes('IoPayAndroid') || global?.navigator?.userAgent.includes('IoPayiOs')),
    isPc() {
      const userAgentInfo = global?.navigator?.userAgent;
      const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
      let flag = true;
      for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo?.indexOf(Agents[v] || '') > 0) {
          flag = false;
          break;
        }
      }
      return flag;
    }
  },
  util: {
    async testRpc(url: string): Promise<{ url: string, lentency: number, height: number }> {
      const start = performance.now(); // 开始时间
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_getBlockByNumber',
            params: ["latest", false],
            id: 1,
          }),
        });

        if (!response.ok) {
          throw new Error(`Error from server: ${response.status}`);
        }
        const res = await response.json();
        console.log(res)
        const end = performance.now();
        return { url, lentency: Number(helper.number.numberFormat(((end - start) / 1000), '0.000', { fallback: '-1' })), height: parseInt(res.result.number, 16) };
      } catch (error) {
        console.error('RPC Latency Test Failed:', error);
        return { url, lentency: -1, height: -1 }; // 在发生错误时返回 -1
      }
    }
  },
  json: {
    safeParse(val: any) {
      try {
        return JSON.parse(val);
      } catch (error) {
        return val;
      }
    }
  },
  address: {
    formatAddress(address) {
      if (!address) return;
      return address.replace(/^(.{4})(.*)(.{4})$/, '$1...$3');
    },
    validateEthAddress(address: string) {
      return /^0x[a-fA-F0-9]{40}$/.test(address);
    },
    validateIoAddress(address: string) {
      return /^io[a-zA-Z0-9]{39}$/.test(address);
    },
    validateAddress(address: string) {
      return helper.address.validateEthAddress(address) || helper.address.validateIoAddress(address);
    },
    safeAddress(address): `0x${string}` | false {
      try {
        const parsedAddress = ethers.utils.getAddress(address);
        return parsedAddress as `0x${string}`;
      } catch (error) {
        return false;
      }
    }
  },
  string: {
    shortString(fullStr = '', strLen, separator) {
      if (!fullStr || fullStr.length <= strLen) return fullStr;

      separator = separator || '...';

      var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);
      return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
    }
  },
  number: {
    //format: '0,0'
    warpBigNumber(value: string, decimals = 18, options?: { format?: string, fallback?: string, min?: number }) {
      const { format = '0.0', fallback = '0.000', min } = options || {}
      if (!value) {
        return {
          value: '...',
          format: '...',
          decimals: '0',
          isZero: true,
        };
      }
      const BigNumberResponse = new BigNumberState({ value: new BigNumber(value), decimals });
      return {
        value: BigNumberResponse.value.toFixed(0),
        originFormat: BigNumberResponse.value.div(10 ** decimals).toFixed(),
        format: helper.number.numberFormat(BigNumberResponse.value.div(10 ** decimals).toFixed(), format, { fallback, min }),
        decimals: String(BigNumberResponse.decimals),
        isZero: BigNumberResponse.value.isZero(),
      };
    },
    //http://numeraljs.com/ format params does not need to deal with decimal places
    //format: '$0,0' '0a' '0,0' '0,0$'
    numberFormat(str: string | number, format: string = '0,0', options?: { min?: number, fallback?: string }): string {
      const { fallback = "0.00" } = options || {};

      if (!str || isNaN(Number(str))) return fallback;
      const numStr = new BigNumber(str).toFixed();
      const countNonZeroNumbers = (_str: string) => {
        const decimalPointIndex = _str.indexOf(".");
        if (decimalPointIndex === -1) {
          return 0;
        }
        const decimalPart = _str.substring(decimalPointIndex + 1);
        let trailingZerosCount = 0;
        for (let i = 0; i < decimalPart.length; i++) {
          if (decimalPart[i] === "0") {
            trailingZerosCount++;
          } else {
            break;
          }
        }
        return trailingZerosCount;
      };

      const fractionDigits = countNonZeroNumbers(format);
      const numberFractionDigits = countNonZeroNumbers(numStr);
      if (options?.min) {
        if (new BigNumber(numStr).isLessThan(new BigNumber(options?.min || 0))) {
          return `< ${numeral(options?.min).format(format)}`;
        }
      }
      const fullStr = new BigNumber(numStr).toFixed();
      let preStr = numeral(fullStr.split(".")[0]).format(format.split(".")[0]);
      const fractionStr = fullStr.split(".")?.[1]?.slice(0, fractionDigits + numberFractionDigits);

      if (numberFractionDigits >= fractionDigits) {
        return (preStr + "." + fractionStr).replace(/\.?0+$/, '')
      }

      if (fractionStr?.[fractionDigits - 1] == '9') {
        return (preStr + '.' + fractionStr.slice(0, fractionDigits - 1) + '9').replace(/\.?0+$/, '')
      }

      const resultStr = numeral(new BigNumber(numStr).toString()).format(format)
      return resultStr.replace(/\.?0+$/, '')
    }
  },
}