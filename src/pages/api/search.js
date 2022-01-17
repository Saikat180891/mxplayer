const aa = [
    { timestamp: null, count: null, query: "aahat", exact_query: "aahat" },
    { timestamp: null, count: null, query: "aafat", exact_query: "aafat" },
    {
        timestamp: null,
        count: null,
        query: "aaja aaja aa bhi ja",
        exact_query: "aaja aaja aa bhi ja",
    },
    { timestamp: null, count: null, query: "aag 1994", exact_query: "aag 1994" },
    { timestamp: null, count: null, query: "aag 1948", exact_query: "aag 1948" },
    { timestamp: null, count: null, query: "aan", exact_query: "aan" },
    { timestamp: null, count: null, query: "aai", exact_query: "aai" },
    {
        timestamp: null,
        count: null,
        query: "aaja aaja tu aaja aanewale",
        exact_query: "aaja aaja tu aaja aanewale",
    },
    {
        timestamp: null,
        count: null,
        query: "aaja re aari",
        exact_query: "aaja re aari",
    },
    {
        timestamp: null,
        count: null,
        query: "aap aaye bahaar aayee",
        exact_query: "aap aaye bahaar aayee",
    },
];

const sho = [
    {
        timestamp: null,
        count: null,
        query: "shock shock shocker",
        exact_query: "shock shock shocker",
    },
    { timestamp: null, count: null, query: "shool", exact_query: "shool" },
    { timestamp: null, count: null, query: "shooter", exact_query: "shooter" },
    { timestamp: null, count: null, query: "shorgul", exact_query: "shorgul" },
    { timestamp: null, count: null, query: "shook", exact_query: "shook" },
    { timestamp: null, count: null, query: "shots", exact_query: "shots" },
    {
        timestamp: null,
        count: null,
        query: "short and curly",
        exact_query: "short and curly",
    },
    { timestamp: null, count: null, query: "show", exact_query: "show" },
    {
        timestamp: null,
        count: null,
        query: "2000 per shot short film",
        exact_query: "2000 per shot short film",
    },
    { timestamp: null, count: null, query: "shobha", exact_query: "shobha" },
];

const dataset = { aa, "shock shock shocker": sho };

export default function handler(req, res) {
    const query = decodeURIComponent(req.query.q);
    if (query) {
        for (let key in dataset) {
            if (key.toLowerCase().includes(query, 0)) {
                return res.status(200).json({ success: true, data: dataset[key] });
            }
        }
    }
    res.status(404).json({ success: false })
}
