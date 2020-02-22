function getDate(x: Date): string {
  return `${x.getFullYear()}. ${x.getMonth()}. ${x.getDate()} ${
    x.getHours() < 10 ? `0${x.getHours()}` : x.getHours()
  }:${x.getMinutes() < 10 ? `0${x.getMinutes()}` : x.getMinutes()}:${
    x.getSeconds() < 10 ? `0${x.getSeconds()}` : x.getSeconds()
  }`;
}

export default getDate;
