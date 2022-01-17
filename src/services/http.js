export const fetcher = async (...args) => {
    const response = await fetch(...args)
    const status = response.status;
    const data = await response.json();
    return { status, ...data };
}

export const asyncRequest = async (asyncCallback) => {
    try {
        return await asyncCallback;
    } catch (error) {
        console.log(error);
    }
}