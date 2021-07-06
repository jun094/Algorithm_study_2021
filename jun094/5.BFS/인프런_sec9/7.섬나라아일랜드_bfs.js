const solution = (arr) => {
    let answer = 0;
    const n = arr.length;
    let q = [];
    let dx = [-1, 0, 1, 0, -1, 1, 1, -1];
    let dy = [0, 1, 0, -1, 1, 1, -1, -1];
    let totoal_route = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[i][j] === 1) {
                let route = [];
                route.push([i, j]);

                arr[i][j] = 0; // 방문처리
                q.unshift([i, j]);

                while (q.length !== 0) {
                    let [x, y] = q.pop();

                    for (let i = 0; i < 8; i++) {
                        let nx = x + dx[i];
                        let ny = y + dy[i];

                        // padding 처리
                        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                            //미방분 & 섬인 곳
                            if (arr[nx][ny] === 1) {
                                arr[nx][ny] = 0; // 방문처리
                                route.push([nx, ny]);
                                q.unshift([nx, ny]);
                            }
                        }
                    }
                }
                totoal_route.push(route.slice());
                answer++;
            }
        }
    }

    console.log(totoal_route);
    return answer;
};

const arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

solution(arr);
