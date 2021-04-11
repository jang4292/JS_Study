var args = process.argv;

const resutl = solveProcess(args[2], args[3])

console.log(`result : ${resutl}`);

function solveProcess(conyPosition, brownPosition) {
  conyPosition = Number.parseInt(conyPosition);
  brownPosition = Number.parseInt(brownPosition);

  console.log(`conyPosition ${conyPosition} / brownPosition ${brownPosition}`);

  const visit = [];
  const queue = [];

  for (let i = 0; i < 20001; i++) {
    visit.push([]);
  }

  visit[brownPosition][0] = true;

  queue.push({ position: brownPosition, newTime: 0 });
  let currentTime = 0;

  while (true) {
    conyPosition += currentTime;

    console.log(`conyPosition : ${conyPosition}`);

    if (conyPosition > 20000) {
      console.log(' conyPosition is over 20000');
      return -1;
    }

    if (visit[conyPosition][currentTime % 2]) {
      return currentTime;
    }

    console.log(' loop ');
    for (let i = 0, length = queue.length; i < length; i++) {
      const data = queue.shift();
      const currentPosition = data.position;
      const newTime = (data.newTime + 1) % 2;

      console.log(` currentPosition : ${currentPosition} / new Time ${newTime}`);
      let newPosition = currentPosition - 1;
      if (newPosition >= 0 && !visit[newPosition][newTime]) {
        visit[newPosition][newTime] = true;
        queue.push({ position: newPosition, newTime: newTime });
      }

      newPosition = currentPosition + 1;
      if (newPosition < 20001 && !visit[newPosition][newTime]) {
        visit[newPosition][newTime] = true;
        queue.push({ position: newPosition, newTime: newTime });
      }

      newPosition = currentPosition * 2;
      if (newPosition < 20001 && !visit[newPosition][newTime]) {
        visit[newPosition][newTime] = true;
        queue.push({ position: newPosition, newTime: newTime });
      }
    }

    currentTime++;
  }
}