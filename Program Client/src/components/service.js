const baseUrl = 'http://localhost:8000/digital/castellum/api/alphabet/sort';

export const postWord = async (words) => {
    const data = {
        words: words
    }
    try {
        const response = await fetch(`${baseUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    };
};