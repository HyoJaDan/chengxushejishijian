export default function mockUpload(data, success, failed, progress) {
  console.log('hello', data.files);
  const mockResult = data.files.map((f) => ({ name: f.name, src: f.name }));

  let intervalId = -1;
  let currentProgress = 0;

  intervalId = setInterval(() => {
    if (currentProgress < 100) {
      currentProgress += 10;
      progress(currentProgress, mockResult[0]);
    }

    if (currentProgress === 100) {
      clearInterval(intervalId);
      success(mockResult /* , { retainSrc: true } */);
    }
  }, 1000);
}
