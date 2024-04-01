import { type ClassValue, clsx } from 'clsx';
import { ethers } from 'ethers';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const safeAddress = (address): `0x${string}` | false => {
  try {
    const parsedAddress = ethers.utils.getAddress(address);
    return parsedAddress as `0x${string}`;
  } catch (error) {
    return false;
  }
};

export const shortStr = (text: string, length = 10) => {
  if (text.length <= length) {
    return text;
  }
  return text.slice(0, length) + '...' + text.slice(-length - 1);
};

export const moneyFormat = (
  num: number | string,
  options?: {
    fractionDigits?: number;
    fallback?: null | string;
  },
) => {
  if (typeof num === 'string') {
    num = Number(num);
  }
  if (!num || isNaN(num) || num === 0) {
    if (options?.fallback !== undefined) {
      return options.fallback;
    }
    return '-';
  }

  if (options?.fractionDigits !== undefined) {
    return '$' + Number(num.toFixed(options.fractionDigits)).toLocaleString();
  }

  return '$' + num.toLocaleString();
};

export const numberFormat = (
  num: number | string,
  options?: {
    fractionDigits?: number;
    fallback?: null | string;
  },
) => {
  if (typeof num === 'string') {
    num = Number(num);
  }

  if (!num || isNaN(num) || num === 0) {
    if (options?.fallback !== undefined) {
      return options.fallback;
    }
    return '-';
  }

  if (options?.fractionDigits !== undefined) {
    return Number(num.toFixed(options.fractionDigits)).toLocaleString();
  }

  return num.toLocaleString();
};
