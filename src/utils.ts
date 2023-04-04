import { Roles } from './types';

export const isString = (string: any): boolean => {
    if (typeof string !== 'string') {
        throw new Error(`Invalid string: ${string}`);
    }
    return true;
};

const parseDate = (date: string): Date => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        throw new Error(`Invalid date: ${date}`);
    }
    return parsedDate;
};

export const isDate = (date: any): boolean => {
    if (typeof date === 'string') {
        try {
            parseDate(date);
            return true;
        } catch (e) {
            return false;
        }
    }
    return false;
};

export const isValidRole = (role: any): boolean => {
    if (!Object.values(Roles).includes(role)) {
        throw new Error(`Invalid role: ${role}`);
    }
    return true;
};
