import { API_URL } from "@/constants/env";
import { Errors } from "@/types/Error";
import axios, { isAxiosError } from "axios";

type Response<T> = {
    data: T | null;
    errors: Errors | null;
    statusCode: number | null;
};

type AxiosUtilParams = {
    route: string;
    body?: object;
};

const getRoute = (route: string) => `${API_URL}${route}`;

const getHeaders = () => {
    return { "Content-Type": "application/json" };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = <T>(error: any) => {
    const returnValue: Omit<Response<T>, "data"> = {
        errors: null,
        statusCode: null,
    };

    if (isAxiosError(error)) {
        if (error.response?.status) {
            returnValue.statusCode = error.response?.status;
        }

        if (error.response?.data) {
            returnValue.errors = error.response.data.errors as Errors;
        } else {
            const errors: Errors = [
                {
                    field: "none",
                    message: error.message,
                },
            ];

            returnValue.errors = errors;
        }
    } else {
        const errors: Errors = [
            {
                field: "none",
                message: "something went wrong.",
            },
        ];

        returnValue.errors = errors;
        console.log(error);
    }

    return returnValue;
};

export const get = async <T>({
    route,
}: AxiosUtilParams): Promise<Response<T>> => {
    let data: T | null = null;
    let errors: Errors | null = null;
    let statusCode: number | null = null;

    try {
        const response = await axios.get(getRoute(route), {
            headers: getHeaders(),
        });

        statusCode = response.status;

        if (response.data) {
            data = response.data as T;
        }
    } catch (error) {
        const { errors: handledErrors, statusCode: handledStatusCode } =
            handleError(error);

        errors = handledErrors;
        statusCode = handledStatusCode;
    }

    return { data, errors, statusCode };
};
