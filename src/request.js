export default class Express {
  constructor({ max, taskQuene }) {
    this.max = max;
    this.taskQuene = taskQuene;
    this.responses = {};
    this.doRequest();
  }
  doRequest() {
    if (!this.taskQuene.length) return;
    //4
    const minCount = getMinCount(this.taskQuene.length, this.max); //2
    for (let i = 0; i < minCount; i++) {
      const task = this.taskQuene.shift();
      this.runTask(task);
    }
  }
  runTask(task) {
    task()
      .then((res) => {
        console.log(res);
        this.responses[task.name] = {
          result: res,
          err: null,
        };
      })
      .catch((err) => {
        this.responses[task.name] = {
          result: null,
          err: err,
        };
      })
      .finally(() => {
        this.doRequest();
      });
  }
}

function getMinCount(count1, count2) {
  return Math.min(count1, count2);
}
