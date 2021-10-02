import { group, sleep } from 'k6';
import http from 'k6/http';
// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
    stages: [
      {target: 100, duration: "60s" },
    ]
};

export default function() {

	group("page_1 - http://localhost:3000/products/42", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "http://localhost:3000/products/42",
			"params": {
				"headers": {
					"Host": "localhost:3000",
					"Connection": "keep-alive",
					"Cache-Control": "max-age=0",
					"sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": "\"macOS\"",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"Sec-Fetch-Site": "none",
					"Sec-Fetch-Mode": "navigate",
					"Sec-Fetch-User": "?1",
					"Sec-Fetch-Dest": "document",
					"Accept-Encoding": "gzip, deflate, br",
					"Accept-Language": "en-US,en;q=0.9",
					"If-None-Match": "W/\"b3c8-S+CmyCVj+it/V6im0LRUOhgPwKg\""
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
