import http from 'k6/http';
import { sleep, check }  from 'k6'

export default function() {
  http.get('http://test.k6.io');
  check(res, {
    'is status 200': (res) => res.status === 200
  })
  sleep(1);
}