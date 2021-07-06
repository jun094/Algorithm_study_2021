const solution = (s, e) => {
    let dx = [-1, 1, 5];
    let visited = Array(10001).fill(false);
    let q = [];
    let level = 0;

    visited[s] = true;
    q.unshift(s);
    while (q.length !== 0) {
        let x = q.pop();

        for (let i = 0; i < 3; i++) {
            let nx = x + dx[i];

            if (nx === e) return level;

            //padding 영역 안에있을때만, 방문안했을때만
            if (nx > 0 && nx <= 10000 && visited[nx] === false) {
                visited[nx] = true;
                q.unshift(nx);
            }
        }
        level++;
    }

    return level;
};
solution(5, 14);
