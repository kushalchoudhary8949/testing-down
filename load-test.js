import http from 'k6/http';
import { check } from 'k6';

export const options = {
    scenarios: {
        burst_1000: {
            executor: 'per-vu-iterations',
            vus: 100000,        // 1,000 concurrent virtual users
            iterations: 1,     // Each sends 1 request simultaneously (total: 1,000 requests)
            maxDuration: '1m', // Timeout limit for all requests to finish
        },
    },
};

export default function () {
    const res = http.get('https://bunkd.in/api/health');
    check(res, { 'status was 200': (r) => r.status === 200 });
    console.log(
        `Status: ${response.status}, URL: ${response.url}`
    );
}
// k6 run load-test.js  